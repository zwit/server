import { NextFunction, Request, Response } from "express";
import { Activity } from "../entity/Activity";
import { BaseController } from "./BaseController";

export class ActivityController extends BaseController {
  constructor() {
    super(Activity);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.entityRepository.find({ relations: ["events"] });
  }
}