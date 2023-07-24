export type viewAllPrison = {
  id: string;
  name: string;
  address: string;
  capacity: number;
  currentOccupancy: number;
};

// ----------------------------------------------

type Block = {
  id: string;
  capacity: number;
  currentOccupancy: number;
  blockName: string;
};

type Staff = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  dateOfJoining: string; // You might want to use a Date type instead of string
  salary: number;
  designation: string;
};

export type ViewSinglePrison = {
  id: string;
  name: string;
  address: string;
  capacity: number;
  currentOccupancy: number;
  description: string;
  blocks: Block[];
  staffs: Staff[];
};

// ----------------------------------------------

export type ViewSinglePrisonProps = {
  id: string;
};

// ----------------------------------------------
