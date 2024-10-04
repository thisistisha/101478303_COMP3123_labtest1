const fs = require('fs');
const path = require('path');

// Define the Logs directory path
const logsDir = path.join(process.cwd(), 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
    // Get all files in the Logs directory
    const files = fs.readdirSync(logsDir);

    // Loop through all files and delete them
    files.forEach(file => {
        const filePath = path.join(logsDir, file);
        console.log(`delete files...${file}`);
        fs.unlinkSync(filePath);  // Remove each file
    });

    // Remove the Logs directory itself
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
} else {
    console.log('Logs directory does not exist.');
}
