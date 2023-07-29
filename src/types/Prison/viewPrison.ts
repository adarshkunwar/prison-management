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
  name: string;
  totalCell: number;
};

type Staff = {
  id: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  dateOfJoining: string;
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
