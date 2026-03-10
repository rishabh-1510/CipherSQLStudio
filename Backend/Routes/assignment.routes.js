import express from "express";

const router = express.Router();

const assignments = [
  {
    id: 1,
    title: "Get all students",
    difficulty: "Easy",
    description: "Write SQL to fetch all students"
  }, 
  {
    id: 2,
    title: "Students older than 20",
    difficulty: "Medium",
    description: "Write SQL to get students where age > 20"
  }
];

router.get("/assignments", (req, res) => {
  res.json(assignments);
});

export default router;