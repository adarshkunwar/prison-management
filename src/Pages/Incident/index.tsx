import List from "../../components/UI/List/List";
import Page from "../../container/Page";
const fields = [
  {
    name: "Alex",
    class: "8",
    rollNo: "4",
  },
  {
    name: "Alex",
    class: "8",
    rollNo: "4",
  },
  {
    name: "Alex",
    class: "8",
    rollNo: "4",
  },
];

const heading = ["name", "class", "rollNo"];

const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i} className="py-5">
              <td className="">{val.class}</td>
              <td>{val.name}</td>
              <td>{val.rollNo}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
