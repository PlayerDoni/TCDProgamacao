import { API } from "../@libs/axios";
import { ICelularType } from "../@libs/types";

const _ENDPOINT = "/celular-types";

const getAll = () => API.get(_ENDPOINT);
const getById = (id: string) => API.get(`${_ENDPOINT}/${id}`);
const remove = (id: string) => API.delete(`${_ENDPOINT}/${id}`);
const create = (data: ICelularType) => API.post(_ENDPOINT, data);
const update = (id: string, data: ICelularType) =>
  API.put(`${_ENDPOINT}/${id}`, data);

export const CelularTypeService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
