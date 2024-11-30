import { API } from "../@libs/axios";
import { ICelularModel } from "../@libs/types";

const _ENDPOINT = "/celular-models";

const getAll = () => API.get(_ENDPOINT);
const getById = (id: string) => API.get(`${_ENDPOINT}/${id}`);
const remove = (id: string) => API.delete(`${_ENDPOINT}/${id}`);
const create = (data: ICelularModel) => API.post(_ENDPOINT, data);
const update = (id: string, data: ICelularModel) =>
  API.put(`${_ENDPOINT}/${id}`, data);

export const CelularModelService = {
  getAll,
  getById,
  create,
  update,
  remove,
};
