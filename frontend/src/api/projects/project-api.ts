import { useMutation, useQuery } from '@tanstack/react-query';

import { api } from '../base-api';
import { AddProjectPayload, ProjectIdPayload } from './types';

export const getProjectListRequest = async () => {
  const a = await api.get('/projects/');
  return a;
};

export const addProjectRequest = async (payload: AddProjectPayload) => {
  return api.post('/projects/', payload);
};

export const getProjectRequest = async (payload: ProjectIdPayload) => {
  return api.get(`/projects/${payload.id}/`);
};

export const editProjectRequest = async (
  id: string,
  payload: AddProjectPayload,
) => {
  return api.put(`/projects/${id}/`, payload);
};

export const deleteProjectRequest = async (payload: ProjectIdPayload) => {
  return api.delete(`/projects/${payload.id}/`);
};

// Hook to fetch project list
export const useProjectListRequest = () =>
  useQuery({
    queryKey: ['projectList'],
    queryFn: () => getProjectListRequest(),
  });

// Hook to add a new project
export const useAddProjectRequest = () =>
  useMutation({
    mutationFn: (payload: AddProjectPayload) => addProjectRequest(payload),
  });

// Hook to fetch project details
export const useProjectRequest = (payload: ProjectIdPayload) =>
  useQuery({
    queryKey: ['projects', payload],
    queryFn: () => getProjectRequest(payload),
  });

// Hook to edit a project
export const useEditProjectRequest = (id: string) =>
  useMutation({
    mutationFn: (payload: AddProjectPayload) => editProjectRequest(id, payload),
  });

// Hook to delete a project
export const useDeleteProjectRequest = (payload) =>
  useMutation({ mutationFn: () => deleteProjectRequest(payload) });
