import { Avalanche } from "../../dist"
import { AdminAPI } from "../../dist/apis/admin"

const ip: string = "marularpc.savannah.network"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 7
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const admin: AdminAPI = avalanche.Admin()

const main = async (): Promise<any> => {
  const successful: boolean = await admin.memoryProfile()
  console.log(successful)
}

main()
