"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const notesController_1 = __importDefault(require("../controllers/notesController"));
class NotesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', notesController_1.default.list);
        this.router.get('/:id', notesController_1.default.getOne);
        this.router.post('/', notesController_1.default.create);
        this.router.put('/:id', notesController_1.default.update);
        this.router.delete('/:id', notesController_1.default.delete);
    }
}
const notesRoutes = new NotesRoutes();
exports.default = notesRoutes.router;
