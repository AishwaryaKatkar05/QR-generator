
const inquirer = require('inquirer').default;
const QRCode = require('qrcode');
const fs = require('fs');


function generateQRCode() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter the text or URL to generate QR Code:',
      validate: function (input) {
        if (input.trim() === '') {
          return 'Input cannot be empty. Please enter some text or a URL.';
        }
        return true;
      }
    }
  ]).then((answers) => {
    const userInput = answers.text;


    const outputFileName = 'qrcode.png';

    QRCode.toFile(outputFileName, userInput, {
      color: {
        dark: '#000',
        light: '#FFF'
      }
    }, function (err) {
      if (err) {
        console.error('Error generating QR Code:', err);
      } else {
        console.log(`✅ QR Code generated and saved as "${outputFileName}"`);
      }
    });
  }).catch(error => {
    console.error('Something went wrong:', error);
  });
}


generateQRCode();
