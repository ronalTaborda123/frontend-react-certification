import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CardContent, FormGroup, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import FileUpload from "../components/FileUpload";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(1, "Write please")
    .max(100, "Too long")
    .required("Requiered"),
  description: Yup.string()
    .min(1, "Write please")
    .max(280, "Too long")
    .required("Requiered"),
  basePrice: Yup.number().positive().required(),
  taxRate: Yup.number().positive().required(),
  productStatus: Yup.string().required("Requiered"),
  inventoryQuantity: Yup.number().positive().required(),
});
const ProductsNew = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      basePrice: 0,
      taxRate: 0,
      productStatus: "",
      inventoryQuantity: 0,
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
            name="name"
            type="search"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.name && formik.touched.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          <TextField
            name="description"
            label="Description"
            type="search"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.description && formik.touched.description ? (
            <div>{formik.errors.description}</div>
          ) : null}
          <TextField
            name="basePrice"
            label="Base Price"
            type="number"
            value={formik.values.basePrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.basePrice && formik.touched.basePrice ? (
            <div>{formik.errors.basePrice}</div>
          ) : null}
          <TextField
            name="taxRate"
            type="number"
            label="Tax Rate"
            value={formik.values.taxRate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.taxRate && formik.touched.taxRate ? (
            <div>{formik.errors.taxRate}</div>
          ) : null}
          <TextField
            name="productStatus"
            type="search"
            label="Product Status"
            value={formik.values.productStatus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
          {formik.errors.productStatus && formik.touched.productStatus ? (
            <div>{formik.errors.productStatus}</div>
          ) : null}
          <TextField
            name="inventoryQuantity"
            label="Inventory Quantity"
            type="number"
            value={formik.values.inventoryQuantity}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          ></TextField>
        </FormGroup>
        <FileUpload />
      </CardContent>
    </Card>
  );
};

export default ProductsNew;
