const fs = require('fs');
const path = require('path');


const logsDir = path.join(process.cwd(), 'Logs');


if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
} else {
    console.log('Logs directory already exists.');
}


process.chdir(logsDir);


for (let i = 0; i < 10; i++) {
    const fileName = i === 0 ? `loge.txt` : `log${i}.txt`;
    fs.writeFileSync(fileName, `This is the content of ${fileName}`);
    console.log(fileName);
}
