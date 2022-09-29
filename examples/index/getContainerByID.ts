import { Avalanche } from "../../dist"
import { IndexAPI } from "../../dist/apis/index"
import { GetContainerByIDResponse } from "../../dist/apis/index/interfaces"

const ip: string = "marularpc.savannah.network"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 7
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const index: IndexAPI = avalanche.Index()

const main = async (): Promise<any> => {
  const id: string = "eLXEKFFMgGmK7ZLokCFjppdBfGy5hDuRqh5uJVyXXPaRErpAX"
  const encoding: string = "hex"
  const baseurl: string = "/ext/index/X/tx"
  const containerByIndex: GetContainerByIDResponse =
    await index.getContainerByID(id, encoding, baseurl)
  console.log(containerByIndex)
}

main()
