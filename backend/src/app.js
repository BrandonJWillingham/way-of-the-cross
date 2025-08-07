const express = require("express");
require("dotenv").config({ path: '../.env' });
const cors = require("cors");
const KJUR = require('jsrsasign')
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// Zoom Meeting SDK Signature Generator
app.post("/generate-signature", (req, res) => {
  try {
    const { meetingNumber, role } = req.body;

    const sdkKey = process.env.SDKKEY;    
    const sdkSecret =process.env.SDKSECRET; 
    const password = process.env.PASSWORD;
    const iat = Math.floor(Date.now() / 1000) - 30;
    const exp = iat + 60 * 60 * 2; // 2 hours

    const header = {
        alg: 'HS256', 
        typ: 'JWT' 
    };

    const payload = {
      appKey:sdkKey,
      mn: meetingNumber,
      role: role,
      iat: iat,
      exp: exp,
      tokenExp: exp,
    };

    const sHeader = JSON.stringify(header)
    const sPayload = JSON.stringify(payload)
    const MEETING_SDK_JWT = KJUR.jws.JWS.sign('HS256', sHeader, sPayload, sdkSecret)
    res.json({ signature: MEETING_SDK_JWT,meetingNumber,password,sdkKey });
  } catch (err) {
    console.error("Signature generation error:", err);
    res.status(500).json({ error: "Failed to generate signature" });
  }
});

module.exports = app;