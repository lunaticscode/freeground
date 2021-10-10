/** @type {import('next').NextConfig} */
require('dotenv').config();
module.exports = {
  reactStrictMode: true,
  env: {
    mode: process.env.MODE,
  }
}
