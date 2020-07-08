export interface IRecipeVersion {
  _id: string,
  cover?: string,
  title: string,
  description: string,
  date: Date,
}

export interface IRecipe {
  _id: string,
  versions: IRecipeVersion[]
}

export interface IRecipeCard {
  id: string,
  cover?: string,
  title: string,
  description: string,
  date: Date,
}

export interface IRecipeFormData {
  cover?: any,
  title: string,
  description: string
}
