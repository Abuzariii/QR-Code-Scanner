QR Code Scanner and Generator built with Next.js, and Talwind.


This is a simple QR Code scanner and generator web app that allows users to either scan a QR code with the help of browser's camera module or generate a QR code for any text or URL. 

Point your camera at a QR code to scan it.
The scanned URL will be displayed on the screen.
The app will make use of Next.js API routes to send check the scanned URL against a catalog of millions of publicly listed malicious URLs from PhishTank and other sites, the data is stored in MongoDb and if the URL matches any of the malicious URLs then it will be blocked and flagged.
You can also create a QR code for your own URL or any text string by simply clicking the generate QR code button and entering your text.

