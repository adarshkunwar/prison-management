import axios from '@axios/axios';
import UserAuthContextApi, {
  UserAuthContext,
} from '@src/HOC/ContextApi/UserContextApi';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';
const schema = yup.object().shape({
  userName: yup.string().required('Email is required'),
  password: yup.string().required('Password is required'),
});

const FormField = [
  {
    name: 'userName',
    type: 'text',
  },
  {
    name: 'password',
    type: 'password',
  },
];

const initialValues = {
  userName: '',
  password: '',
};

const LoginPage = () => {
  const navigate = useNavigate();

  const postLoginForm = async (val) => {
    axios
      .post('/user/login', val)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          localStorage.setItem('token1', res.data.token);
          console.log(res.data);

          navigate('/');
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error('Something went wrong');
      });
  };

  //   const postLoginForm = async (val) => {
  //     try {
  //       const res = await post('/adminlogintable/admin/login', val);

  //       console.log(res.data);
  //       if (res.status === 200) {
  //         localStorage.setItem('token1', res.data.token);
  //         console.log(res.data);
  //         setLogin(true);

  //         const admin_id = res.data.admin_id;
  //         setLoginData(true);
  //         console.log(res.data);
  //         localStorage.setItem('admin_id', admin_id);
  //         navigate('/', { state: { admin_id } });
  //       }
  //     } catch (error) {
  //       console.log(error);

  //       // Handle the error and display toast notification
  //       if (
  //         error.response &&
  //         error.response.data &&
  //         error.response.data.message
  //       ) {
  //         toast.error(error.response.data.message);
  //       } else {
  //         toast.error('An unexpected error occurred. Please try again later.');
  //       }
  //     }
  //   };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-400 ">
      <div className="rounded-lg w-96 p-8 h-96 bg-slate-900   shadow-sm shadow-gray-300">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">
          Admin Login
        </h2>
        <UserAuthContextApi>
          <UserAuthContext.Consumer>
            {(context) => {
              return (
                <div>
                  <Formik
                    initialValues={initialValues}
                    validationSchema={schema}
                    onSubmit={(val) => {
                      console.log(val);
                      postLoginForm(val);
                    }}
                  >
                    {({ handleSubmit }) => {
                      return (
                        <Form onSubmit={handleSubmit}>
                          {FormField.map((val, i) => {
                            return (
                              <div key={i} className="mb-4">
                                <label
                                  htmlFor={val.name}
                                  className="block font-bold mb-2 text-white"
                                >
                                  {val.name}
                                </label>
                                <Field
                                  type={val.type}
                                  name={val.name}
                                  placeholder={`Enter your ${val.name}`}
                                  className="border border-gray-400 p-2 w-full rounded-lg"
                                />
                                <ErrorMessage
                                  name={val.name}
                                  component={'div'}
                                  className="text-red-500"
                                ></ErrorMessage>
                              </div>
                            );
                          })}

                          <button
                            type="submit"
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700"
                          >
                            Log in
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              );
            }}
          </UserAuthContext.Consumer>
        </UserAuthContextApi>
      </div>
    </div>
  );
};

export default LoginPage;
