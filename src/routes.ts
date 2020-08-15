import { EventController } from "./controller/EventController";
import { ActivityController } from "./controller/ActivityController";
import { LanguageController } from "./controller/LanguageController";
import { IdeogramController } from "./controller/IdeogramController";
import { WordController } from "./controller/WordController";
import { SentenceController } from "./controller/SentenceController";
import { BookController } from "./controller/BookController";

const rootPath = '/api';
const controllers = {
    'event': EventController,
    'activity': ActivityController,
    'language': LanguageController,
    'ideogram': IdeogramController,
    'word': WordController,
    'sentence': SentenceController,
    'book': BookController,
};

function getBaseRoutesController(path, Controller) {
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

function getBaseRoutes() {
    let baseRoutes = [];

    Object.keys(controllers).forEach(path => {
        baseRoutes = baseRoutes.concat(getBaseRoutesController(path, controllers[path]))
    });

    return baseRoutes;
}

export const Routes = []
    .concat(getBaseRoutes())
;