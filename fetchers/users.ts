import useSwr from "swr";
import { AxiosError } from "axios";

import { User } from "models";

import { api } from "utils/api";

export enum UserRequestKeys {
  ALL = "/users",
  CERTAIN = "/user",
}

const fetchUsers = async (): Promise<User[]> => {
  const { data } = await api.get("/users");

  return data;
};

const fetchUser = async (id: string): Promise<User> => {
  const { data } = await api.get(`/users/${id}`);

  return data;
};

export const deleteUser = async (id: string) => {
  await api.delete(`/users/${id}`);
};

export const useUser = (id = "") =>
  useSwr<User, AxiosError>(
    [UserRequestKeys.CERTAIN, id],
    ([url, id]: [string, string]) => fetchUser(id)
  );

export const useUsers = () =>
  useSwr<User[], AxiosError>(UserRequestKeys.ALL, fetchUsers);
