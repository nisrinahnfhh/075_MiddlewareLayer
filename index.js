import express from 'express'
import pg from 'pg'
import Joi from 'joi'

const app = express()
const port = 3000
const { Pool } = pg

const pool = new Pool({
    user: 'postgress',
    host: 'localhost',
    database: 'mahasiswa',
    password: 'Haechan060600'
})


app.use(express.json())
app.use(express.urlencoded({ extended: true}))



app.use((requestAnimationFrame, res, next) => {
    const start = Date.now()

res.on('finish', () => {
        const duration = Date.now() - start;

        console.log({
            method: req.method,
            url: req.originalUrl,
            status: res.statusCode,
            duration: ${duration}ms,
        })
    })

    next()
})