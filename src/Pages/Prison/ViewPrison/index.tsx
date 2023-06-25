import List from "../../../components/UI/List/List";
import Page from "../../../container/Page";

const fields = [
  {
    prisonID: 1,
    prisonName: "Example Prison",
    location: "City X",
    capacity: 100,
  },
];

const heading = ["Prison ID", "Prison Name", "Location", "Capacity"];

const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i}>
              <td>{val.prisonID}</td>
              <td>{val.prisonName}</td>
              <td>{val.location}</td>
              <td>{val.capacity}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
