import * as express from "express"
import { Express, Request, Response } from "express"

const app: Express = express()
const port: Number = 3000

app.get("/test", (req: Request, res: Response) => {
   res.render("Hello world")
})

app.listen(port, () => {
   console.log(`Server run at : localhost:${port}`)   
})