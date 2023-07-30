interface Cell {
  //   id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  //   createdDate: string;
  //   status: string;
}

interface Block {
  //   id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  //   createdDate: string;
  //   totalCell: number;
  cells: Cell[];
}

interface Prisoner {
  //   id: string;
  firstName: string;
  lastName: string;
  //   age: number;
  address: string;
  //   contactNumber: number;
  dateOfAdmission: string;
  dateOfRelease: string;
  crime: string;
  latestVisit: string;
}

export interface CellWithBlock {
  id: string;
  name: string;
  capacity: number;
  currentOccupancy: number;
  createdDate: string;
  status: string;
  block?: Block;
  prisoners: Prisoner[];
}

export interface CellWithBlockProps {
  id: string;
}
