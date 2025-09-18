const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const User = require('./userModel');
const app = express()