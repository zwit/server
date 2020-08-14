import { Language } from "../entity/Language";
import { BaseController } from "./BaseController";

export class LanguageController extends BaseController {
  constructor() {
    super(Language);
  }
}