import { useContext } from "react";
import UserContext from "../context/UserContext";
import apiClient from "./client";
const getAuthHeader = (token) => ({ Authorization: `Token ${token}` });

export const useProperty = () => {
  const endPoint = "properties/";
  const getProperties = () => apiClient.get(endPoint);
  const putProperties = async () => apiClient.put(endPoint);
  const deleteProperties = async () => {};
  const getProperty = (url) => apiClient.get(url);
  const getPropertyTypes = () => apiClient.get(endPoint + "types/");
  const getPropertyStatus = () => apiClient.get(endPoint + "status/");
  const getPropertyLocations = () => apiClient.get(endPoint + "location/");
  const getUserProperties = (token) =>
    apiClient.get(endPoint + "user/", {}, { headers: getAuthHeader(token) });
  const filterProperty = (params) => apiClient.get(endPoint, params);
  const postProperty = (token, data) =>
    apiClient.post(endPoint, data, {
      headers: {
        "Content-Type": "multipart/form-data",
        ...getAuthHeader(token),
      },
    });
  return {
    getProperties,
    getProperty,
    putProperties,
    deleteProperties,
    getPropertyTypes,
    getPropertyStatus,
    getPropertyLocations,
    getUserProperties,
    postProperty,
    filterProperty,
  };
};

export const useUser = () => {
  const { clearToken, user, setUser, token } = useContext(UserContext);
  const login = (data) => apiClient.post("users/login/", data);
  const register = (data) => apiClient.post("users/register/", data);
  const logout = () => clearToken(true);
  const getUser = async () => {
    if (user) {
      return;
    }
    const resposnse = await apiClient.get(
      "users/profile/",
      {},
      {
        headers: getAuthHeader(token),
      }
    );
    if (!resposnse.ok) {
      console.log("apiHooks->useUser", resposnse.problem);
    }
    setUser(resposnse.data);
  };
  const putUser = async (userData) =>
    await apiClient.put("users/profile/", userData, {
      headers: {
        ...getAuthHeader(token),
        "Content-Type": "multipart/form-data",
      },
    });
  return { login, logout, getUser, register, putUser };
};

export const useHouses = () => {
  const endPoint = "houses/";
  const getAllHouses = () => apiClient.get(endPoint);
  const getHousTypes = () => apiClient.get(endPoint + "types/");
  const getHouseStatus = () => apiClient.get(endPoint + "status/");
  const filterHouses = (params) => apiClient.get(endPoint, params);
  return { getAllHouses, getHousTypes, getHouseStatus, filterHouses };
};
