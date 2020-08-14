import { Book } from "../entity/Book";
import { BaseController } from "./BaseController";

export class BookController extends BaseController {
  constructor() {
    super(Book);
  }
}