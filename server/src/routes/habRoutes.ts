import { Router } from "express";
import habController from "../controllers/habController";

class HabRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config():void {
        this.router.get('/', habController.list);
        this.router.get('/:id', habController.getOne);
        this.router.post('/', habController.create);
        this.router.put('/:id', habController.update);
        this.router.delete('/:id', habController.delete);
    }

}

const habRoutes = new HabRoutes();
export default habRoutes.router;