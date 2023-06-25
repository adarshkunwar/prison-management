import List from "../../../components/UI/List/List";
import Page from "../../../container/Page";

const fields = [
  { blockID: 1, prisonID: 1, blockName: "A", capacity: 10 },
  { blockID: 2, prisonID: 1, blockName: "B", capacity: 5 },
];

const heading = ["Block ID", "Prison ID", "Block Name", "Capacity"];

const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i}>
              <td>{val.blockID}</td>
              <td>{val.prisonID}</td>
              <td>{val.blockName}</td>
              <td>{val.capacity}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
