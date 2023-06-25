import List from "../../../components/UI/List/List";
import Page from "../../../container/Page";

const fields = [
  {
    staffID: 1,
    prisonID: 1,
    name: "John Doe",
    position: "Guard",
    salary: 50000,
  },
  {
    staffID: 2,
    prisonID: 1,
    name: "Jane Smith",
    position: "Warden",
    salary: 80000,
  },
];

const heading = ["Staff ID", "Prison ID", "Name", "Position", "Salary"];
const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i}>
              <td>{val.staffID}</td>
              <td>{val.prisonID}</td>
              <td>{val.name}</td>
              <td>{val.position}</td>
              <td>{val.salary}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
