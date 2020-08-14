import { EventController } from "./controller/EventController";
import { ActivityController } from "./controller/ActivityController";
import { LanguageController } from "./controller/LanguageController";
import { IdeogramController } from "./controller/IdeogramController";
import { WordController } from "./controller/WordController";
import { SentenceController } from "./controller/SentenceController";
import { BookController } from "./controller/BookController";

const rootPath = '/api';

function getBaseroutes(Controller, path) {
    return [{
        method: "get",
        route: `${rootPath}/${path}`,
        controller: Controller,
        action: "all"
    }, {
        method: "get",
        route: `${rootPath}/${path}/:id`,
        controller: Controller,
        action: "one"
    }, {
        method: "post",
        route: `${rootPath}/${path}`,
        controller: Controller,
        action: "save"
    }, {
        method: "delete",
        route: `${rootPath}/${path}/:id`,
        controller: Controller,
        action: "remove"
    }];
}

export const Routes = []
    .concat(getBaseroutes(EventController, 'event'))
    .concat(getBaseroutes(ActivityController, 'activity'))
    .concat(getBaseroutes(LanguageController, 'language'))
    .concat(getBaseroutes(IdeogramController, 'ideogram'))
    .concat(getBaseroutes(WordController, 'word'))
    .concat(getBaseroutes(SentenceController, 'sentence'))
    .concat(getBaseroutes(BookController, 'book'))
;