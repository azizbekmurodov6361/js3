for (; ;) {
    let num = prompt("Son kiriting");

    if (isNaN(num) || num === "") {
        alert("Bu son emas, iltimos son kiriting");
    } else if (num % 2 == 0) {
        alert("Juft");
    } else if (num % 2 == 1) {
        alert("Toq");
    } else {
        alert("Bu son emas, iltimos son kiriting");
    }
}

function funksya() {
    let value = prompt("Qiymatni kiriting:");
    let daraja = prompt("Darajani kiriting:");

    if (isNaN(value) || isNaN(daraja) || value == 0 || daraja == 0) {
        alert("NaN yoki 0 bo'la olmaydi, boshidan kiriting.");
        return;
    }

    value = Number(value);
    daraja = Number(daraja);

    let result = 1;
    for (let i = 0; i < daraja; i++) {
        result *= value;
    }

    alert(`Javob: ${result}`);
}

funksya();  


function qoy() {
    let qoysana = 1;

    while (true) {
        let sana = prompt("Qo'ylarni sanash uchun istalgan sonni kiriting:");
        
        if (sana === null || sana === "") break;

        let count = parseInt(sana);

        if (isNaN(count)) {
            alert("Iltimos, son kiriting.");
            continue;
        }

        for (let i = 1; i <= count; i++) {
            alert(`${i} qo'y...`);
        }
    }
}

qoy();

function Kvadrat() {
    let tomon = prompt("Kvadratning tomon uzunligini kiriting:");

    if (isNaN(tomon) || tomon <= 0) {
        alert("Iltimos, musbat son kiriting.");
        return;
    }

    tomon = parseInt(tomon);

    let kvd = '';
    
    for (let i = 0; i < tomon; i++) {
        for (let j = 0; j < tomon; j++) {
            if (i === j) {
                kvd += '[*]';
            } else {
                kvd += '   ';
            }
        }
        kvd += '\n';
    }

    alert(`Kvadrat:\n${kvd}`);
}

kvadrat();  



