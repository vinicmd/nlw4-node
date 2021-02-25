import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRespository } from '../repositories/SurveysRespository'

class SurveysController {
  async create(request: Request, response: Response){
    const { title, description} = request.body;

    const surveysRespository = getCustomRepository(SurveysRespository);

    const survey = surveysRespository.create({
      title,
      description
    });

    await surveysRespository.save(survey);

    return response.status(201).json(survey);
  }

  async show(request: Request, response: Response) {
    const surveysRespository = getCustomRepository(SurveysRespository);
    const all = await surveysRespository.find();

    return response.json(all);
  }
}

export { SurveysController }