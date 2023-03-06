import useSecureStore from "../hooks/useSecureStore";
import apiClient from "./client";

export const useProperty = () => {
  const endPoint = "properties/";
  const getProperties = () => apiClient.get(endPoint);
  const postProperties = async (data, token) =>
    apiClient.post(endPoint, data, { headers: { Token: token } });
  const putProperties = async () => {};
  const deleteProperties = async () => {};
  return { getProperties, postProperties, putProperties, deleteProperties };
};

export const useUser = () => {
  const [, setToken] = useSecureStore("token", null);
  const login = (data) => apiClient.post("users/login/", data);
  const logout = () => setToken(null);
  return { login, logout };
};

export const useHouses = () => {
  const endPoint = "houses/";
  const getAllHouses = () => apiClient.get(endPoint);
  return { getAllHouses };
};
