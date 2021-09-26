type BillKey = '5000' | '2000' | '1000' | '500' | '200' | '100' | '50'

export type IBills = {
  [key in BillKey]: number
}