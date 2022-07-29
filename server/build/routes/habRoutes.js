"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habController_1 = __importDefault(require("../controllers/habController"));
class HabRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', habController_1.default.list);
        this.router.get('/:id', habController_1.default.getOne);
        this.router.post('/', habController_1.default.create);
        this.router.put('/:id', habController_1.default.update);
        this.router.delete('/:id', habController_1.default.delete);
    }
}
const habRoutes = new HabRoutes();
exports.default = habRoutes.router;
