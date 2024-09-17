let bcc, i , j;
bcc = "<table width='100%' border='2' cellSpacing='2' cellpadding='2'>";
i = j = 1;
// For
for (i = 1; i <= 10; i++) {
    bcc += "<tr>";
    for (j = 1; j <= 10; j++) {
        bcc += `<td width="10%">${i} x ${j} = ${i * j}</td>`;
    }
    bcc += "</tr>";
}
bcc += "</table>";
document.write(bcc);

//While
// while (i <= 10) {
//     bcc += "<tr>";
//     while (j <= 10) {
//         bcc += "<td width='10%'>" + i + " x " + j + " = " + i * j + "</td>";
//         j++;
//     }
//     bcc += "</tr>";
//     j = 1;
//     i++;
// }
// bcc += "</table>";
// document.write(bcc);