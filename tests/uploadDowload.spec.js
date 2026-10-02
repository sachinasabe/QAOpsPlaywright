const { test, expect } = require('@playwright/test');
const ExcelJs = require('exceljs');

async function writeExcelTest(searchText, replaceText, change, filePath) {


    const workbook = new ExcelJs.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');
    const output = await readExcel(worksheet, searchText);

    const cell = worksheet.getCell(output.row, output.column + change.columnChange);
    cell.value = replaceText;
    await workbook.xlsx.writeFile(filePath);

}
async function readExcel(worksheet, searchText) {
    let output = { row: -1, column: -1 };
    worksheet.eachRow((row, rowNumber) => {
        row.eachCell((cell, colNumber) => {
            console.log(cell.value);
            if (cell.value === searchText) {
                output.row = rowNumber;
                output.column = colNumber;
            }

        })
    })
    return output;

}
// writeExcelTest("Mango",350,{rowChange:0,columnChange:2},"C:/Users/DELL.5470/Downloads/excelDownloadTest.xlsx");
test('upload download excel validation', async ({ page }) => {
    const textsearch = 'Mango';
    const updatevalue = '350';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/");
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole('button', { name: 'Download' }).click();
    const download = await downloadPromise;

    const filePath =
        "C:/Users/DELL.5470/Downloads/excelDownloadTest.xlsx";

    await download.saveAs(filePath);
    await writeExcelTest(textsearch, updatevalue, { rowChange: 0, columnChange: 2 }, filePath);
    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles(filePath);
    const desiredrow = page.getByRole('row').filter({ hasText: textsearch });
    await expect(desiredrow.locator("#cell-4-undefined")).toContainText(updatevalue);
})