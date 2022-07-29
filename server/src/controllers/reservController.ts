import { Request, Response } from "express";
import pool from "../database";


class ReservController {

    public async list (req: Request, res: Response) {
        const reserv = await pool.query('SELECT * FROM reservaciones');
        res.json(reserv);
    }

    public async getOne (req: Request, res: Response): Promise<any> {
        const {id} = req.params;
        const reserv = await pool.query('SELECT * FROM reservaciones WHERE id = ?',[id]);
        if (reserv.length > 0) {
            return res.json(reserv[0]);
        }
        res.status(404).json({text: "The reservation doesnt exist"});
    }

    public async create (req: Request, res: Response): Promise<void> {
        await pool.query('INSERT INTO reservaciones set ?', [req.body]);
        res.json({message: 'Reserv Saved'});
    }

    public async delete (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('DELETE FROM reservaciones WHERE id = ?',[id]);
        res.json({message: 'The reservation was deleted'});
    }

    public async update (req: Request, res: Response): Promise<void> {
        const {id} = req.params;
        await pool.query('UPDATE reservaciones set ? WHERE id = ?', [req.body, [id]]);
        res.json({message: 'The reservation was updated'});
    }
}

const reservController = new ReservController();
export default reservController;