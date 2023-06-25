import List from "../../../components/UI/List/List";
import Page from "../../../container/Page";

const fields = [
  { cellID: 1, blockID: 1, capacity: 4, occupancy: 2 },
  { cellID: 2, blockID: 1, capacity: 4, occupancy: 3 },
  { cellID: 3, blockID: 2, capacity: 2, occupancy: 1 },
];

const heading = ["Cell ID", "Block ID", "Capacity", "Occupancy"];

const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i}>
              <td>{val.cellID}</td>
              <td>{val.blockID}</td>
              <td>{val.capacity}</td>
              <td>{val.occupancy}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
