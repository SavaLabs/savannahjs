import { Avalanche, BN } from "../../dist"
import { PlatformVMAPI } from "../../dist/apis/platformvm"

const ip: string = "marularpc.savannah.network"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 7
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const pchain: PlatformVMAPI = avalanche.PChain()

const main = async (): Promise<any> => {
  const currentSupply: BN = await pchain.getCurrentSupply()
  console.log(currentSupply.toString())
}

main()
