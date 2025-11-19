function giaiPTBac2(a, b, c) {
    if (a === 0) {
        console.log("Day khong phai phuong trinh bac 2");
        return;
    }

    const delta = b * b - 4 * a * c;

    if (delta < 0) {
        console.log("Phuong trinh vo nghiem");
    } 
    else if (delta === 0) {
        const x = -b / (2 * a);
        console.log("Phuong trinh co nghiem kep x =", x);
    } 
    else {
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        console.log(`Phuong trinh co 2 nghiem:
- x1 = ${x1}
- x2 = ${x2}`);
    }
}

giaiPTBac2(1, -3, 2); // x1=2, x2=1
