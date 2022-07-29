"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reservController_1 = __importDefault(require("../controllers/reservController"));
class ReservRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', reservController_1.default.list);
        this.router.get('/:id', reservController_1.default.getOne);
        this.router.post('/', reservController_1.default.create);
        this.router.put('/:id', reservController_1.default.update);
        this.router.delete('/:id', reservController_1.default.delete);
    }
}
const reservRoutes = new ReservRoutes();
exports.default = reservRoutes.router;
