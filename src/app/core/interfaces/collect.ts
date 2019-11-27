export interface MyCollectionsArts {
  id: number;
  name: string;
  author: string;
  thumb: string;
  location: string;
  currentVal: number;
  purchasedPrice: number;
}

export interface MyCollectionsArtFull {
  id: number;
  name: string;
  author: string;
  thumb: string;
  location: string;
  currentVal: number;
  purchasedPrice: number;
  DayData: Array<number>
  WeekData: Array<number>
  MonthData: Array<number>
  ThreeMonthData: Array<number>
  YearMonthData: Array<number>
  AllMonthData: Array<number>
  equity: number;
  cost: number;
  todayReturn: string;
  totalReturn: string;
  averageCost: number;
  shares: number;
  portfolioDiversity: number;
  cashholdExercise: number;
  about: string;
  ceo:string;
  employees: number;
  headquarters: string;
  founded: number;
  marketCup: string | number
  priceEarningsRatio: any;
  dividendYield: number;
  averageVolume: number | string
  highToday: number;
  lowToday: number;
  openPrice: number;
  volume: number | string;
  weekHigh: number
  weekLow: number
}


