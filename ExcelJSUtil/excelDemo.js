const { test,expect } = require('@playwright/test');
const ExcelJs=require('exceljs');

async function writeExcelTest(searchText,replaceText,change,filePath){


const workbook=new ExcelJs.Workbook();
await workbook.xlsx.readFile(filePath);
const worksheet=workbook.getWorksheet('Sheet1');
const output=await readExcel(worksheet,searchText);

const cell=worksheet.getCell(output.row,output.column+change.columnChange);
cell.value=replaceText;
await workbook.xlsx.writeFile(filePath);

}
async function readExcel(worksheet,searchText){
    let output ={row:-1, column:-1};
    worksheet.eachRow((row,rowNumber) =>{
row.eachCell((cell,colNumber)=>{
     console.log(cell.value);
    if(cell.value ===searchText){
        output.row=rowNumber;
        output.column=colNumber;
    }
    
})
})
return output;

}
writeExcelTest("Mango",350,{rowChange:0,columnChange:2},"C:/Users/DELL.5470/Downloads/excelDownloadTest.xlsx");
