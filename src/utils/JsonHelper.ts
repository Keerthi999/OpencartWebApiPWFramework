
import fs from "fs"

export class JsonHelper{
static readjson(filepath:string):Record<string,string>[]{
    return JSON.parse(fs.readFileSync(filepath,"utf-8"))
}
}