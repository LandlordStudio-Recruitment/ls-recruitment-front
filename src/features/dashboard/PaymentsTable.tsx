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
import NumberFormat from "react-number-format";
import { useSelector } from "react-redux";
import { RootState } from "../../rootReducer";
import { useAppDispatch } from "../../store";
import { fetchPaymentsThunk, makePaymentThunk } from "./paymentsSlice";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  dueDate: {
    fontWeight: 600,
  },
  description: {
    fontWeight: 600,
  },
  overdue: {
    backgroundColor: "#ff2f6a",
    paddingLeft: "7px",
    paddingRight: "7px",
    paddingTop: "0px",
    paddingBottom: "0px",
    borderRadius: "50px",
    color: "white",
  },
  paid: {
    backgroundColor: "#55dc9d",
    paddingLeft: "7px",
    paddingRight: "7px",
    paddingTop: "0px",
    paddingBottom: "0px",
    borderRadius: "50px",
    color: "white",
  },
});

const PaymentsTable: FC = () => {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const { payments } = useSelector((state: RootState) => state.payments);

  useEffect(() => {
    async function fetch() {
      dispatch(fetchPaymentsThunk());
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
          {payments.map((row) => {
            const dueDateMoment = moment(row.dueDate);
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" colSpan={1}>
                  <Box>
                    <Typography variant="body2" className={classes.dueDate}>
                      {dueDateMoment.format("MMM").toUpperCase()}
                    </Typography>
                    <Typography variant="body2" className={classes.dueDate}>
                      {" "}
                      {dueDateMoment.format("DD")}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="left">
                  <Typography variant="body2">{row.category}</Typography>
                  <Typography variant="body2" className={classes.description}>
                    {row.description}
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  {row.status.toLocaleLowerCase() === "unpaid" &&
                    dueDateMoment < moment() && (
                      <Box className={classes.overdue} textAlign="center">
                        <Typography variant="caption"> Overdue</Typography>
                      </Box>
                    )}
                  {row.status.toLocaleLowerCase() === "paid" && (
                    <Box className={classes.paid} textAlign="center">
                      <Typography variant="caption"> Paid</Typography>
                    </Box>
                  )}
                </TableCell>
                <TableCell align="left">
                  <NumberFormat
                    value={row.amount / 100.0}
                    displayType="text"
                    thousandSeparator
                    decimalScale={2}
                    fixedDecimalScale
                    prefix="$"
                  ></NumberFormat>{" "}
                </TableCell>
                <TableCell align="left">
                  {row.status.toLocaleLowerCase() === "unpaid" && (
                    <Button
                      color="secondary"
                      size="small"
                      variant="contained"
                      onClick={() => {
                        dispatch(makePaymentThunk(row.id));
                      }}
                    >
                      Pay
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PaymentsTable;
