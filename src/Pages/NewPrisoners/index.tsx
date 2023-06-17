import { Formik, Form, Field, FormikErrors } from "formik"
import * as Yup from "yup"

type Props = {}

// the fields I want is prisoners name, age, crime, total sentence, remaining sentence
const fields = [{
    name: "pName",
    type: "text",
    label: "Prisoner's Name"
},
{
    name: "pAge",
    type: "number",
    label: "Prisoner's Age"
},
{
    name: "pCrime",
    type: "text",
    label: "Prisoner's Crime"
},
{
    name: "pTotalSentence",
    type: "number",
    label: "Prisoner's Total Sentence"
},
{
    name: "pRemainingSentence",
    type: "number",
    label: "Prisoner's Remaining Sentence"
}
]

const initialValues = {
    pName: "",
    pAge: 0,
    pCrime: "",
    pTotalSentence: 0,
    pRemainingSentence: 0
}

const schema = Yup.object().shape({
    pName: Yup.string().required("Required"),
    pAge: Yup.string().required("Required"),
    pCrime: Yup.string().required("Required"),
    pTotalSentence: Yup.string().required("Required"),
    pRemainingSentence: Yup.string().required("Required")
})


const index = ({}: Props) => {
  return (
    <div> 
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={(values) => {
                console.log(values)
            }
        }        >

           {({ errors, touched }) => (
                <Form>
                    {fields.map((field, index) => (
                        <div key={index}>
                            <label htmlFor={field.name}>{field.label}</label>
                            <Field name={field.name} type={field.type} />
                            {errors[field.name as keyof typeof errors] && touched[field.name as keyof typeof touched] && (
  <div>{errors[field.name as keyof typeof errors]}</div>
)}
                        </div>
                    ))}
                </Form>
           )}

        </Formik>
    </div>
  )
}

export default index