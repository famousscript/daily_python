// src/app/data/certification-data.ts



export const certificationData: { [empId: string]: any[] } = {
 'B2333': generateSampleRows('B2333 Cert', 10),
 '2007': generateSampleRows('2007 Cert', 10),
 '25204': generateSampleRows('25204 Cert', 10),
 '26704': generateSampleRows('26704 Cert', 10),
 '1206': generateSampleRows('1206 Cert', 10),
 '12279': generateSampleRows('12279 Cert', 10),
 '18711': generateSampleRows('18711 Cert', 10),
 '40389': generateSampleRows('40389 Cert', 10),
 '16350': generateSampleRows('16350 Cert', 10),
 '14900': generateSampleRows('14900 Cert', 10),
 '16091': generateSampleRows('16091 Cert', 10),
};


function generateSampleRows(certPrefix: string, count: number) {
 const quarters = ['CY25Q1', 'CY25Q2', 'CY25Q3', 'CY25Q4'];
 const data = [];
 for (let i = 1; i <= count; i++) {
  const cert = `${certPrefix} ${i}`;
  const certData = quarters.map(q => ({
   quarterCy: q,
   cmHours: +(Math.random() * 100).toFixed(1),
   cmHC: +(Math.random()).toFixed(1),
   pmHours: +(Math.random() * 100).toFixed(1),
   pmHC: +(Math.random()).toFixed(1),
  }));
  data.push({ cert, certData });
 }
 return data;
}
