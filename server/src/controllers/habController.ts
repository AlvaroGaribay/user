import { Request, Response } from "express";
import pool from "../database";


class HabController {

    public async list (req: Request, res: Response) {
        const hab = await pool.query('SELECT * FROM habitacion');
        res.json(hab);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const notes = await pool.query('SELECT * FROM habitacion WHERE id = ?',[id]);
        if (notes.length > 0) {
            return res.json(notes[0]);
        }
        res.status(404).json({text: "The room doesnt exist"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO habitacion set ?', [req.body]);
        res.json({message: 'Room Saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM habitacion WHERE id = ?',[id]);
        res.json({message: 'The room was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE habitacion set ? WHERE id = ?', [req.body, [id]]);
        res.json({message: 'The room was updated'});
    }
}

const habController = new HabController();
export default habController;