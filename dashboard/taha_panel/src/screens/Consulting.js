import { Table } from '@mui/material'
import React from 'react';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Consulting({Consulting}) {
    return (
        <div className="tw-w-full tw-flex">
        <TableContainer component={Paper} className="tw-w-full">
             <Table sx={{ minWidth: 650 }} aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
                  <TableHead>
                     <TableRow>
                        <TableCell align="right" style={{color:"green"}}>id</TableCell>
                        <TableCell align="right" style={{color:"green"}}>نام ونام خانوادگی</TableCell>
                        <TableCell align="right" style={{color:"green"}}>شماره تماس</TableCell>
                        <TableCell align="right" style={{color:"green"}}>گزینه</TableCell>
                        <TableCell align="right" style={{color:"green"}}>جواب داده شده</TableCell>
                        <TableCell align="right" style={{color:"green"}}>عملیات</TableCell>
                    </TableRow>
                 </TableHead>
                 <TableBody>
                 {/* {lan.map((row) => (
                   <TableRow
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                     >
                      <TableCell align="right" component="th" scope="row"
                       style={{fontFamily: "Lalezar"}}>
                         {row.product?.name}
                         </TableCell>
                        <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.percent}</TableCell>
                        <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.expiresIn}</TableCell>
                    </TableRow> */}
                 </TableBody>
            </Table>
        </TableContainer>
    </div>
    )
}
