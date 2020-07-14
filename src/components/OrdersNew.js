import React from "react";
import { CardContent, FormGroup, Card } from "@material-ui/core";
import { useFormik } from "formik";
import * as Yup from "yup";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const validationSchema = Yup.object().shape({
  client: Yup.string()
    .min(1, "Write please")
    .max(280, "Too long")
    .required("Requiered"),
  total: Yup.number().positive().required(),
  discount: Yup.number().positive().required(),
  productStatus: Yup.string().required("Requiered"),
});
const OrdersNew = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      client: "",
      total: 0,
      discount: 0,
      orderStatus: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(JSON.stringify({ values }, null, 2));
    },
  });
  return (
    <Card variant="outlined">
      <CardContent>
        <FormGroup
          onSubmit={formik.handleSubmit}
          fullWidth
          className={classes.margin}
        >
          <TextField
            aria-describedby="my-helper-text"
            name="client"
            type="search"
            label="client"
            value={formik.values.client}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.client && formik.touched.client ? (
            <div>{formik.errors.client}</div>
          ) : null}
          <TextField
            aria-describedby="my-helper-text"
            name="total"
            type="number"
            label="total"
            value={formik.values.total}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.total && formik.touched.total ? (
            <div>{formik.errors.total}</div>
          ) : null}
          <TextField
            aria-describedby="my-helper-text"
            name="discount"
            type="number"
            label="discount"
            value={formik.values.discount}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.discount && formik.touched.discount ? (
            <div>{formik.errors.discount}</div>
          ) : null}
          <TextField
            aria-describedby="my-helper-text"
            name="orderStatus"
            type="search"
            label="orderStatus"
            value={formik.values.orderStatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.orderStatus && formik.touched.orderStatus ? (
            <div>{formik.errors.orderStatus}</div>
          ) : null}
        </FormGroup>
        <br></br>
        <br></br>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
          // onClick={handleClickOpen}
        >
          {" "}
          Save order
        </Button>
      </CardContent>
    </Card>
  );
};

export default OrdersNew;
