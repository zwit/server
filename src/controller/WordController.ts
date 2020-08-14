import { Word } from "../entity/Word";
import { BaseController } from "./BaseController";

export class WordController extends BaseController {
  constructor() {
    super(Word);
  }
}