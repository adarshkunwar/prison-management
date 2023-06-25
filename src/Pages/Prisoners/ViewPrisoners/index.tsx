import List from "../../../components/UI/List/List";
import Page from "../../../container/Page";
const fields = [
  {
    name: "Alex",
    age: "24",
    crime: "Arson",
    totalSentence: 4,
    remainingSentence: 1,
  },
  {
    name: "Alex",
    age: "24",
    crime: "Arson",
    totalSentence: 4,
    remainingSentence: 1,
  },
  {
    name: "Alex",
    age: "24",
    crime: "Arson",
    totalSentence: 4,
    remainingSentence: 1,
  },
];

const heading = [
  "name",
  "age",
  "Crime",
  "Total Sentence",
  "Remaining Sentence",
];

const index = () => {
  return (
    <Page>
      <List heading={heading}>
        {fields.map((val, i) => {
          return (
            <tr key={i}>
              <td className="py-1">{val.name}</td>
              <td>{val.age}</td>
              <td>{val.crime}</td>
              <td>{val.totalSentence}</td>
              <td>{val.remainingSentence}</td>
            </tr>
          );
        })}
      </List>
    </Page>
  );
};

export default index;
