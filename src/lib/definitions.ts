export type TPrice = {
  pay: string,
  description: Array<string>,
};

export type TCourse = {
  name: string,
  suitable: string,
  description: Array<string>,
  price?: Array<TPrice> | null,
  note: string

};

export type TCourses = Array<TCourse>

