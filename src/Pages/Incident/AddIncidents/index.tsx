import * as Yup from "yup";
import Forms from "../../../components/UI/Form/Forms";
import FormHead from "../../../components/UI/FormHead";
import Page from "../../../container/Page";

const fields = [
  {
    name: "cellId",
    label: "Cell ID",
    type: "number",
  },
  {
    name: "blockId",
    label: "Block ID",
    type: "number",
  },
  {
    name: "capacity",
    label: "Capacity",
    type: "number",
  },
  {
    name: "occupancy",
    label: "Occupancy",
    type: "number",
  },
];

const initialValues = {
  cellId: "",
  blockId: "",
  capacity: "",
  occupancy: "",
};

const schema = Yup.object().shape({
  cellId: Yup.number().required("Required"),
  blockId: Yup.number().required("Required"),
  capacity: Yup.number().required("Required"),
  occupancy: Yup.number().required("Required"),
});

const index = () => {
  const handleSubmit = (data: object) => {
    console.log(data);
  };

  return (
    <Page>
      <div>
        <FormHead title="Add Cell" />
        <Forms
          fields={fields}
          initialValues={initialValues}
          schema={schema}
          onSubmit={handleSubmit}
        />
      </div>
    </Page>
  );
};

export default index;
