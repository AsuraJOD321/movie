import Joi from 'joi';
const createMovie=Joi.object({
  
  title:Joi.string().label('Title').required(),
  imdbScore:Joi.number().label('ImdbScore').required(),
  directorId:Joi.number().label('DirectorId').required(),
  actors:Joi.any().label('Actor').required(),
  genreId:Joi.number().label('GenreId').required(),
  description:Joi.string().label('Description').optional(),
  thumbnail:Joi.string().label('Thumbnail').optional(),
  embedVideoUrl:Joi.string().label('EmbedVideoUrl').optional(),
  avgRatings:Joi.number().label('avgRatings').required(),
  totalRatings:Joi.number().label('TotalRating').required(),
  duration:Joi.string().label('Duration').required(),
  releasedAt:Joi.date().label('ReleasesAt').required()

});

export {createMovie};