// https://docs.bitfinex.com/v2/reference#ws-public-ticker
export const parseFundingTickerData = data => ({
  frr: data[0],
  bid: data[1],
  bidPeriod: data[2],
  bidSize: data[3],
  ask: data[4],
  askPeriod: data[5],
  askSize: data[6],
  dailyChange: data[7],
  dailyChangePercentage: data[8],
  lastPrice: data[9],
  volume: data[10],
  high: data[11],
  low: data[12]
})
