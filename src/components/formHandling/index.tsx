import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import styles from "./FormHandling.module.scss";

interface FormValues {
  name: string;
  age: number | string;
  email: string;
  password: string;
}

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Please enter your name")
    .matches(/^([A-Za-z\s])+$/, "Name can only letters"),
  age: Yup.number()
    .required("Please enter your age")
    .typeError("Age must be a number"),
  email: Yup.string()
    .required("Please enter your email")
    .email("Invalid email address"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
});

const FormHandling = () => {
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);
  const [passwordShown, setPasswordShown] = useState<boolean>(true);

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmit(values),
  });

  const handleSubmit = (values: FormValues) => {
    setSubmittedData(values);
    formik.resetForm();
  };

  return (
    <div className={styles.container}>
      <div className={styles.taskDetails}>
        <div className={styles.taskTitle}>{`3. Form Handling`}</div>
        <div className={styles.taskDescription}>
          {`Create a form with validation that stores and displays data on
          submission.`}
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className={styles.form}>
        <div className={styles.fieldNameAge}>
          <div className={styles.field}>
            <label className={styles.label}>{`Name`}</label>
            <input
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your name"
              className={`${styles.inputField} ${
                formik.touched.name && formik.errors.name
                  ? styles.invalidInput
                  : ""
              }`}
            />
            {formik.touched.name && formik.errors.name && (
              <div className={styles.error}>{formik.errors.name}</div>
            )}
          </div>
          <div className={styles.field}>
            <label className={styles.label}>{`Age`}</label>
            <input
              type="number"
              name="age"
              value={formik.values.age}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your age"
              className={`${styles.inputField} ${
                formik.touched.age && formik.errors.age
                  ? styles.invalidInput
                  : ""
              }`}
            />
            {formik.touched.age && formik.errors.age && (
              <div className={styles.error}>{formik.errors.age}</div>
            )}
          </div>
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{`Email`}</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className={`${styles.inputField} ${
              formik.touched.email && formik.errors.email
                ? styles.invalidInput
                : ""
            }`}
          />
          {formik.touched.email && formik.errors.email && (
            <div className={styles.error}>{formik.errors.email}</div>
          )}
        </div>
        <div className={styles.field}>
          <label className={styles.label}>{`Password`}</label>
          <div className={styles.passwordInput}>
            <input
              type={passwordShown ? "password" : "text"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter your Password"
              className={`${styles.inputField} ${
                formik.touched.password && formik.errors.password
                  ? styles.invalidInput
                  : ""
              }`}
            />
            <div
              onClick={() => setPasswordShown(!passwordShown)}
              className={styles.passwordBtn}
            >
              {passwordShown ? (
                <VisibilityOutlinedIcon />
              ) : (
                <VisibilityOffOutlinedIcon />
              )}
            </div>
          </div>
          {formik.touched.password && formik.errors.password && (
            <div className={styles.error}>{formik.errors.password}</div>
          )}
        </div>
        <button type="submit" className={styles.submit}>
          {`Submit`}
        </button>
      </form>
      {submittedData && (
        <div className={styles.result}>
          <div className={styles.resultHeading}>{`Submitted Data`} </div>
          <div className={styles.resultFieldName}>
            <strong>{`Name:`}</strong> {submittedData.name}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Age:`}</strong> {submittedData.age}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Email:`}</strong> {submittedData.email}
          </div>
          <div className={styles.resultFieldName}>
            <strong>{`Password:`}</strong> {submittedData.password}
          </div>
        </div>
      )}
    </div>
  );
};

export default FormHandling;
