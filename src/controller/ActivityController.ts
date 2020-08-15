import { NextFunction, Request, Response } from "express";
import { Activity } from "../entity/Activity";
import { BaseController } from "./BaseController";

export class ActivityController extends BaseController {
  constructor() {
    super(Activity);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    if (request.query.where) {
      const where = JSON.parse(request.query.where);

      return this.entityRepository.find({ where, relations: ["events"] });
    }

    return this.entityRepository.find({ relations: ["events"] });
  }
}