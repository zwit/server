import { Sentence } from "../entity/Sentence";
import { BaseController } from "./BaseController";

export class SentenceController extends BaseController {
  constructor() {
    super(Sentence);
  }
}