import { fields } from '@src/types/Data';

// type optionArr = {
//   id: string;
//   name: string;
// }[];

export const createField = (
  name: string,
  label: string,
  type: string,
  options?: any[]
) => {
  const returnable: fields = {
    name: name,
    label: label,
    type: type,
  };
  if (options) returnable.options = options;
  return returnable;
};
