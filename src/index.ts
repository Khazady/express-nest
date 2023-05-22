import express, {Request, Response} from "express";

const app = express()
const port = process.env.PORT || 3002

app.get('/', (req: Request, res: Response) => {
    res.send('Hello Changed Text! 234')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
