const express = require('express')
const app = express()
app.get('/', (request, response) => {
    response.send('<h1>Hello Cohort2 Part3 SectionC!</h1>')
})
app.listen(8081)
console.log(`Srever started ${8081}`)