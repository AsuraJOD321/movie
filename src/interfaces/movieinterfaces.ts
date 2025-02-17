import * as Sequelize from 'sequelize';

export interface InputMovieInterface {
  title: string;
  imdbScore: number; // TypeScript uses 'number' instead of 'decimal'
  directorId: number;
  actors: string[];
  genreId: number;
  description?: string;
  thumbnail?: string;
  embedVideoUrl?: string;
  avgRatings?: number;
  totalRatings?: number;
  duration: string;
  releasedAt: Date;
}

export interface MovieInterface extends InputMovieInterface {
  id: number;
}

export interface MovieModelInterface
  extends Sequelize.Model<MovieInterface, Partial<InputMovieInterface>>, MovieInterface {}


   export type CategoryType = 'popular' | 'top-rated' | 'latest' ;

   
  export interface ArgsMovieInterface{
    offset?:number;
    limit?:number;
    order:string;
    sort:'asc' | 'desc';
    searchQuery?:string;
    genreId?:string;
    category:CategoryType

  }