import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";

export class BaseController {
  entityRepository: any;
  
  constructor(entity) {
    this.entityRepository = getRepository(entity);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.entityRepository.find();
  }

  async one(request: Request, response: Response, next: NextFunction) {
    return this.entityRepository.findOne(request.params.id);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    return this.entityRepository.save(request.body);
  }

  async remove(request: Request, response: Response, next: NextFunction) {
    let eventToRemove = await this.entityRepository.findOne(request.params.id);
    await this.entityRepository.remove(eventToRemove);
  }

}