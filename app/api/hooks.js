import { useContext } from "react";
import UserContext from "../context/UserContext";
import apiClient from "./client";
const getAuthHeader = (token) => ({ Authorization: `Token ${token}` });

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
  const { clearToken, user, setUser, token } = useContext(UserContext);
  const login = (data) => apiClient.post("users/login/", data);
  const logout = () => clearToken(true);
  const getUser = async () => {
    if (user) {
      return;
    }
    const resposnse = await apiClient.get(
      "users/profile/",
      {},
      { headers: getAuthHeader(token) }
    );
    if (!resposnse.ok) {
      console.log("apiHooks->useUser", resposnse.problem);
    }
    setUser(resposnse.data);
  };
  return { login, logout, getUser };
};

export const useHouses = () => {
  const endPoint = "houses/";
  const getAllHouses = () => apiClient.get(endPoint);
  return { getAllHouses };
};
