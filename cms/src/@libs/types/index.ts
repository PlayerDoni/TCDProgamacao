export interface ICelularType {
  id?: string;
  name: string;
}

export interface ICelularFactory {
  id?: string;
  name: string;
}

export interface ICelularModel {
  id?: string;
  name: string;
  factory: ICelularFactory;
}

export interface ICelular {
  id?: string;
  description: string;
  photo: string;
  yearFactory: number;
  yearModel: number;
  priceRent: number;
  type: ICelularType;
  model: ICelularModel;
}
