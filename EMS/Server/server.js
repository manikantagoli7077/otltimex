import express from 'express'
import mysql from 'mysql'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import Jwt from 'jsonwebtoken' 

const app=express();