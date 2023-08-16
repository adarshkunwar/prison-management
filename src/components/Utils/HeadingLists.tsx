const creatingHeading = (name: string, isSortable: boolean) => {
  return { name, isSortable };
};
// data should be changed on capacity
export const singlePrisonForSinglePrison = [
  creatingHeading('SN', false),
  creatingHeading('Prison Name', false),
  creatingHeading('Location', false),
  creatingHeading('Capacity', true),
  creatingHeading('Occupancy', false),
  creatingHeading('Actions', false),
];

// data should change on capacity
export const singleBlockForBlock = [
  creatingHeading('SN', false),
  creatingHeading('Block Name', false),
  creatingHeading('Prison Name', false),
  creatingHeading('Capacity', true),
  creatingHeading('Occupancy', false),
  creatingHeading('Actions', false),
];

// data should change on capacity
export const singleCellForCell = [
  creatingHeading('SN', false),
  creatingHeading('Cell Name', false),
  creatingHeading('Block Name', false),
  creatingHeading('Capacity', true),
  creatingHeading('Occupancy', false),
  creatingHeading('Actions', false),
];

// data wont change at all
export const singlePrisonerForPrisoner = [
  creatingHeading('SN', false),
  creatingHeading('Image', false),
  creatingHeading('Prisoner Name', false),
  creatingHeading('Cell Name', false),
  creatingHeading('Address', false),
  creatingHeading('Contact', false),
  creatingHeading('Actions', false),
  creatingHeading('Move', false),
];

export const singleVisitorForVisitor = [
  creatingHeading('SN', false),
  creatingHeading('Visitor Name', false),
  creatingHeading('Prisoner Name', false),
  creatingHeading('Age', false),
  creatingHeading('Address', false),
  creatingHeading('Contact', false),
  creatingHeading('Relation', false),
  creatingHeading('Date Of Visit', false),
  creatingHeading('Action', false),
];

export const singleStaffForStaff = [
  creatingHeading('SN', false),
  creatingHeading('Name', false),
  creatingHeading('Prison Name', false),
  creatingHeading('Position', false),
  creatingHeading('Salary', false),
  creatingHeading('Joining Date', false),
  creatingHeading('Address', false),
  creatingHeading('Age', false),
  creatingHeading('Contact Number', false),
  creatingHeading('Action', false),
];
