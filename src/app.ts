import compression from "compression";
import e from "express";
import { getPublicPath, getViewsPath } from "./libs/utils";
import { error_handler, undefined_routes_handler } from "./middlewares";
import { home_routes } from "./modules/home";

const app = e();

// Setup EJS view
app.set("view engine", "ejs");
app.set("views", getViewsPath());

// Compression middleware
app.use(compression());

// Body parser middleware
app.use(e.json());
app.use(e.urlencoded({ extended: true }));

// Setup static folder
app.use(e.static(getPublicPath()));

// Define routes
app.use(home_routes);

// Handle undefined routes
app.use(undefined_routes_handler);

// Error catcher
app.use(error_handler);

export default app;
