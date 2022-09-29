import { Avalanche } from "../../dist"
import { InfoAPI } from "../../dist/apis/info"

const ip: string = "marularpc.savannah.network"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 7
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const info: InfoAPI = avalanche.Info()

const main = async (): Promise<any> => {
  const nodeVersion: string = await info.getNodeVersion()
  console.log(nodeVersion)
}

main()
