export type viewAllBlock = {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  totalCell: number;
  prison: prison;
};

type prison = {
  id: string;
  name: string;
};

export type viewSingleBlock = {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  totalCell: number;
  prison: prison;
  cells: any[];
};

export type viewSingleBlockProps = {
  id: string;
};

export type updateBlock = {
  name: string;
  capacity: number;
};
