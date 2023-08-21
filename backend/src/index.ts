import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from 'cors';
import { AttendmentModel } from "./models/AttendmentModel";
import { TeamModel } from "./models/TeamModel";
const app = express();
const prisma = new PrismaClient();
const attendmentModel = new AttendmentModel();
const teamModel = new TeamModel();

app.use(express.json());

const allowedOrigins = ['http://localhost:4200'];
const options: cors.CorsOptions = {
  origin: allowedOrigins
};
app.use(cors(options));

const statusMapping = {
  aberto: 0,
  atendendo: 1,
  atendido: 2,
};

app.get("/attendments", async (req: Request, res: Response) => {
  const allattendments = await attendmentModel.findAll();
  res.json(allattendments);
});

app.get("/pending-attendments", async (req: Request, res: Response) => {
  const attendmentByStatus = await attendmentModel.getPendingAttendments();
  res.json(attendmentByStatus);
});

app.get("/team/:teamId/attendments", async (req: Request, res: Response) => {
  const team_id = req.params.teamId;
  const attendmentByTeam = await attendmentModel.findByTeam(team_id);
  res.json(attendmentByTeam);
});

app.post("/attendment", async (req: Request, res: Response) => {
  const { description, team_id } = req.body;
  const createAttendment = await attendmentModel.create(description, team_id);
  res.json(createAttendment);
});

app.put("/attendment/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const status = req.body.status;
  const updateAttendment = await attendmentModel.update(id, status);
  res.json(updateAttendment);
});

app.get("/teams", async (req: Request, res: Response) => {
  const teams = await teamModel.getTeams();
  res.json(teams);
});

app.get("/", async (req: Request, res: Response) => {
  res.send({ message: "Server running on port 3030" });
});

app.listen("3030", () => {
  console.log("Server running on port 3030");
});
