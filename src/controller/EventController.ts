import { Event } from "../entity/Event";
import { NextFunction, Request, Response } from "express";
import { BaseController } from "./BaseController";

export class EventController extends BaseController {
  constructor() {
    super(Event);
  }

  async all(request: Request, response: Response, next: NextFunction) {
    return this.entityRepository.find({ relations: ["activity"] });
  }
}