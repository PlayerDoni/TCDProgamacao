import { API } from "../@libs/axios";
import { ICelular } from "../@libs/types";

const _ENDPOINT = "/celulares";

const getAll = () => API.get(_ENDPOINT);
const getById = (id: string) => API.get(`${_ENDPOINT}/${id}`);
const remove = (id: string) => API.delete(`${_ENDPOINT}/${id}`);
const create = (data: ICelular) => API.post(_ENDPOINT, data);
const update = (id: string, data: ICelular) =>
  API.put(`${_ENDPOINT}/${id}`, data);
const upload = (file: File) => {
  const formData = new FormData();
  formData.append("file", file);

  return API.post(`${_ENDPOINT}/upload`, formData, {
    headers: {
      "Content-Type": "mulipart/form-data",
    },
  });
};

export const CelularService = {
  getAll,
  getById,
  create,
  update,
  remove,
  upload,
};
