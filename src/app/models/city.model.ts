export class City {

  constructor(
    public city: string,
    public lastUpdate: string,
    public countryId: number,
    public status?: string, //? identifica propiedades opcionales
    public cityId?: number
  ){}

}
