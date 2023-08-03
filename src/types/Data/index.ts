export type PrisonSimple = {
  id: string;
  name: string;
  address: string;
  capacity: number;
  currentOccupancy: number;
  createdDate: string;
  description: string;
  blocks: BlockSimple[];
  staffs: StaffSimple[];
};

export type BlockSimple = {
  id?: string;
  name: string;
  capacity: number;
  currentOccupancy?: number;
  totalCell?: number;
  createdDate?: string;
  cells?: CellSimple[];
  prison?: PrisonSimple;
};

export type addBlock = {
  name: string;
  capacity: number;
  currentOccupancy?: number;
  totalCell?: number;
  createdDate?: string;
  prison?: string;
};

export type CellSimple = {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  createdDate: string;
  status: string;
  prisoners: PrisonerSimple[];
  block?: BlockSimple;
};

export type PrisonerSimple = {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  dateOfAdmission?: string;
  contactNumber: string | number;
  dateOfRelease: string;
  crime: string;
  image?: string;
  latestVisit?: string;
  visitors?: VisitorSimple[];
  cell?: CellSimple;
};

export type VisitorSimple = {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  relation: string;
  dateOfVisit?: string;
  prisoner?: PrisonerSimple | string;
};

export type StaffSimple = {
  id?: string;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  contactNumber: string;
  dateOfJoining?: string;
  salary: number;
  designation: string;
  prison?: PrisonSimple | string;
};

export type fields = {
  name: string;
  label: string;
  type: string;
  options?: {
    id: string;
    name: string;
  }[];
};
