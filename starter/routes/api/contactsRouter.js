import express from "express";
import { mockData } from "../../models/mockData.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    //LOGIC HERE
  } catch (error) {
    next(error);
  }
});

router.get("/:contactId", async (req, res, next) => {
  try {
    //LOGIC HERE
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    //LOGIC HERE
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    //LOGIC HERE
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    //LOGIC HERE
  } catch (error) {
    next(error);
  }
});

export { router };
