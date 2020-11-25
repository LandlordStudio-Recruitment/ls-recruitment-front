import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { useAppDispatch } from "../../store";
import { fetchPayments } from "./paymentsSlice";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  dueDate: {
    fontWeight: 700,
  },
});

const PaymentsTable: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { payments } = useSelector((state: RootState) => state.payments);

  useEffect(() => {
    async function fetch() {
      dispatch(fetchPayments());
    }
    fetch();
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width="10%">Due By</TableCell>
            <TableCell align="left" width="60%">
              Description
            </TableCell>
            <TableCell align="left" width="10%">
              Status
            </TableCell>
            <TableCell align="left" width="10%">
              Amount
            </TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {payments.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" colSpan={1}>
                <Box>
                  <Typography variant="body2" className={classes.dueDate}>
                    {" "}
                    {moment(row.dueBy).format("MMM").toUpperCase()}
                  </Typography>
                  <Typography variant="body2" className={classes.dueDate}>
                    {" "}
                    {moment(row.dueBy).format("DD")}
                  </Typography>
                </Box>

                {console.log(row.dueBy)}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">
                <Button color="secondary" variant="contained">
                  Pay
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentsTable;
