"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class NotesRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
    }
    config() {
        this.router.get('/', (req, res) => res.send('notes'));
    }
}
const notesRoutes = new NotesRoutes();
exports.default = notesRoutes.router;
