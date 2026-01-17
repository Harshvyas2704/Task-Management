// title, description, status, priority, project, assignedTo, dueDate

import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: "This is default desc of Project",
    },
    status: {
      type: String,
      enum: {
        values: ["Open", "In Progress", "Hold", "Completed"],
        message: `{VALUE} is incorrect status type`,
      },
    },
    priority: {
      type: String,
      enum: {
        values: ["Critical", "High", "Low"],
        message: `{VALUE} is incorrect status type`,
      },
    },
    project: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Project",
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    dueDate: {
        type: Date
    },
  },
  { timestamps: true },
);

export const Task = mongoose.model("Task", TaskSchema);
