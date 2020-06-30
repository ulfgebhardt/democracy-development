import { Schema, SchemaTimestampsConfig, Document } from "mongoose";

export interface ICronJob extends Document, SchemaTimestampsConfig {
  name: string;
  lastStartDate?: Date;
  lastErrorDate?: Date;
  lastError?: string;
  lastSuccessDate?: Date;
  lastSuccessStartDate?: Date;
  running: boolean;
}

const CronJobSchema = new Schema<ICronJob>(
  {
    name: { type: String, unique: true, index: true, required: true },
    lastStartDate: { type: Date, default: null },
    lastErrorDate: { type: Date, default: null },
    lastError: { type: String, default: null },
    lastSuccessDate: { type: Date, default: null },
    lastSuccessStartDate: { type: Date, default: null },
    running: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default CronJobSchema;
