export type cells = {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  createdDate: string;
  status: string;
  prisoners: [];
};

type visitors = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  dateOfVisit: string;
};

export type data = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  dateOfAdmission: string;
  dateOfRelease: string;
  crime: string;
  image: string;
  latestVisit: null;
  cell: cells;
  visitors: [];
};
