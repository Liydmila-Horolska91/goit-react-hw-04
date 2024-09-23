import { Formik, Form, Field } from "formik";
import toast, { Toaster } from "react-hot-toast";
import s from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    if (!values.query) {
      toast.error("Tell me what do you want to search!", {
        style: {
          backgroundColor: "#ace1af",
          color: "#1b4d3e",
        },
        duration: 3000,
        position: "top-right",
      });
    }

    onSubmit(values.query);
    values.query = "";
  };

  return (
    <header className={s.header}>
      <Toaster />
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.searchForm}>
          <Field
            name="query"
            type="text"
            className={s.inputField}
            autoComplete="off"
            placeholder="Search images..."
          />
          <button type="submit" className={s.searchBtn}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}