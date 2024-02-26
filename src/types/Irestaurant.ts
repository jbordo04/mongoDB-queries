interface IData {
  date: object
  grade: string
  score: number
}

export interface IRestaurant {
  adress: {
    building: string
    coord: number[]
    street: string
    zipcode: number
  }
  borough: string
  cuisine: string
  grades: IData[]
  name: string
  restaurant_id: string
}
