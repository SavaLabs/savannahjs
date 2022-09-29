import { Avalanche } from "../../dist"
import { InfoAPI } from "../../dist/apis/info"
import { GetTxFeeResponse } from "../../dist/apis/info/interfaces"

const ip: string = "marularpc.savannah.network"
const port: number = 9650
const protocol: string = "http"
const networkID: number = 7
const avalanche: Avalanche = new Avalanche(ip, port, protocol, networkID)
const info: InfoAPI = avalanche.Info()

const main = async (): Promise<any> => {
  const iGetTxFeeResponse: GetTxFeeResponse = await info.getTxFee()
  console.log(iGetTxFeeResponse)
}

main()
