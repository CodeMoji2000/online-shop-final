import React from 'react';
import Templet from "../components/common/Templet"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData( city ,nameOfStore,name) {
  return { city ,nameOfStore,name };
}

const rows = [
  createData("ایرانشهر"," کانون تبلیغاتی نقشینه","آقایان میلاد نصیری وعلی مظفری"),
  createData("اسلامشهر"," تابلوسازی خانه هنر","آقای فرهاد روشن"),
  createData("اصفهان","تبلیغات دهکده"," آقای امین خلیلزاده"),
  createData("اهواز ","تابلوسازی احسان"," آقای ناجی پارسائیان"),
  createData("اصفهان ","تبلیغات دهکده","آقای امین خلیلزاده"),
  createData("اهواز","تابلوسازی احسان ","آقای ناجی پارسائیان"),
  createData("اراک","تابلوسازی ماهور","  آقای حامدرضایی"),
  createData("اردبیل ","تابلوسازی ساسان  ","  آقای ساسان"),
  createData("بندرعباس","تابلوسازی شیخی زاده","آقای مجتبی شیخی زاده"),
  createData("میناب","تابلوسازی بوم رنگ","آقای محمد جهانگیری"),
  createData("بهبهان","تابلوسازی معین ","آقای هادی معینی فر"),
  createData("تنکابن","  تابلوسازی ثریا  "," آقای جلیل ثریا"),
  createData("رفسنجان","تابلوسازی الکتروصام"," آقای عبدالرضا کرمی زاده"),
  createData("زاهدان   "," تابلوسازی امیر ","آقای محمدحسین مرادی"),
  createData("سنندج","تابلوسازی آرش","آقای آرش یعقوبی"),
  createData("شیراز ","تابلوسازی یکتانقش","آقای زاهد زارعی"),
  createData("شهرکرد","تابلوسازی  اسماعیل زاده "," آقای اسماعیل زاده"),
  createData("طبس "," گروه تبلیغاتی لیزر رسان"," آقای جلال توفیقی"),
  createData("عسلویه وکنگان","تابلوسازی لیزرکات کنگان","آقای میثم حسن زاده"),
  createData("فرخشهر ","تابلوسازی گلشن","آقای عباس مسعودی"),
  createData("کرمانشاه ","تابلوساز اعظمی","آقای اعظمی"),
  createData("لاهیجان ","چاپ سورنا ","آقای علیرضا صفری"),
  createData("همدان "," گروه تبلیغاتی کرشمه "," آقایان عباس الماسی نیا ومحمدمحرابی پیرو"),
  createData("یزد"," تابلوسازی شبرنگ"," آقای علی حاجی بیگی"),
];

export default function ListOfAgents() {
  return <Templet>
       <div 
       style={{fontFamily: "Lalezar"}}
       className="tw-w-full tw-h-14 tw-text-center tw-py-4 tw-bg-white tw-border-b-2 tw-border-green-600">
          <p>فهرست نمایندگان</p>
      </div>
      <TableContainer component={Paper} className="tw-w-full" >
      <Table aria-label="simple table" style={{direction:"rtl",fontFamily: "Lalezar"}}>
        <TableHead>
          <TableRow>
            <TableCell align="right" style={{color:"green"}}>شهر</TableCell>
            <TableCell align="right" style={{color:"green"}}>نام مغازه</TableCell>
            <TableCell align="right" style={{color:"green"}}>نام مالک</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right" component="th" scope="row"
              style={{fontFamily: "Lalezar"}}>
                {row.city}
              </TableCell>
              <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.nameOfStore}</TableCell>
              <TableCell align="right" style={{fontFamily: "Lalezar"}}>{row.name}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Templet>
    
}