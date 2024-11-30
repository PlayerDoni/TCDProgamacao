import { API } from "../@libs/axios";
import { ICelularFactory } from "../@libs/types";

const _ENDPOINT = "/celular-factories";

const getAll = () => API.get(_ENDPOINT);
const getById = (id: string) => API.get(`${_ENDPOINT}/${id}`);
const remove = (id: string) => API.delete(`${_ENDPOINT}/${id}`);
const create = (data: ICelularFactory) => API.post(_ENDPOINT, data);
const update = (id: string, data: ICelularFactory) =>
  API.put(`${_ENDPOINT}/${id}`, data);

export const CelularFactoryService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
