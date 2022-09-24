const express = require('express')
const app = require('express')()
const helmet = require('helmet')
const bodyParse = require('body-parser')
const morgan = require('morgan')

app.use(express.urlencoded())
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(bodyParse.json())
app.use(helmet())
app.use(morgan('combined'))

app.listen(3000, ()=> {
    console.log('-----------------')
    console.log('3000 포트로 서버가 켜졌습니다')
    console.log('-----------------')
})