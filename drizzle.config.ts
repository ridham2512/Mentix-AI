import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });
//updated drizzle.config.ts to use the defineConfig function from drizzle-kit and to specify the output directory for the generated files, the path to the schema file, the database dialect, and the database credentials. 
export default defineConfig({
  out: "./drizzle",
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});