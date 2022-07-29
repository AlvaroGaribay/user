import { Router } from "express";
import reservController from "../controllers/reservController";

class ReservRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', reservController.list);
        this.router.get('/:id', reservController.getOne);
        this.router.post('/', reservController.create);
        this.router.put('/:id', reservController.update);
        this.router.delete('/:id', reservController.delete);
    }

}

const reservRoutes = new ReservRoutes();
export default reservRoutes.router;