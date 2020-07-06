import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

const columns = [
  { id: "client", label: "Client", minWidth: 170 },
  {
    id: "total",
    label: "Total",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "discount",
    label: "Discount",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  { id: "state", label: "State", minWidth: 150 },
];

function createData(code, client, total, discount, state) {
  return { code, client, total, discount, state };
}
const rows = [
  createData(1, "Pedro Gudaña", 1324171354, 3287263, "Registrada"),
  createData(2, "Carlos cuello", 1403500365, 9596961, "Pagada"),
  createData(3, "Italy", 60483973, 301340, "Entregada"),
];

const Orders = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div>
      <div>
        <br />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<AddCircleOutlineIcon />}
          onClick={handleClickOpen}
        >
          {" "}
          New order
        </Button>
        <br />
        <br />
        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        key={row.code}
                        hover
                        role="checkbox"
                        tabIndex={-1}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">insert order</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name client"
              fullWidth
            />
            <TextField
              margin="dense"
              id="total"
              label="Total"
              type="number"
              fullWidth
            />
            <TextField
              margin="dense"
              id="discount"
              label="Discount"
              type="number"
              fullWidth
            />
            <TextField margin="dense" id="product" label="Products" fullWidth />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Subscribe
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};
export default Orders;
