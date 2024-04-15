import express from "express";
import { mockData } from "../../models/mockData.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  //LOGIC HERE
});

router.get("/:contactId", async (req, res, next) => {
  //LOGIC HERE
});

router.post("/", async (req, res, next) => {
  //LOGIC HERE
});

router.delete("/:contactId", async (req, res, next) => {
  //LOGIC HERE
});

router.put("/:contactId", async (req, res, next) => {
  //LOGIC HERE
});

export { router };
