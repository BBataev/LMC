import { z } from "zod";
import { Validation } from "./Validation";

export const UserScema = z.object({
  id: z.string(),
  username: z.string(),
});

export type User = z.infer<typeof UserScema>;

export const fetchUser = (id: string): Promise<User> => {
  return fetch(`/api/users/${id}`)
    .then((res) => res.json())
    .then((data) => UserScema.parse(data));
};

export function registerUser(
  username: string,
  email: string,
  password: string
): Promise<void> {
  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  }).then(() => undefined);
}

export function loginUser(email: string, password: string): Promise<void> {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then(Validation)
    .then(() => undefined);
}

export function logoutUser(): Promise<void> {
  return fetch("/api/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(() => undefined)
}

export function fetchMe(): Promise<User> {
  return fetch("/api/users/me")
    .then(Validation)
    .then((res) => res.json())
    .then((data) => UserScema.parse(data));
}
