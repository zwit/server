import { Ideogram } from "../entity/Ideogram";
import { BaseController } from "./BaseController";

export class IdeogramController extends BaseController {
  constructor() {
    super(Ideogram);
  }
}