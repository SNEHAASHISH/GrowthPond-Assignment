import express from 'express';
import bodyParser from 'body-parser';
import passport from './passport.js';
import session from 'express-session';
import dotenv from 'dotenv';

dotenv.config();
const { json } = bodyParser;

// Importing the routers
import userRouter from './routes/UserRoutes.js';
import chatbotRouter from './routes/ChatbotRoutes.js';
import conversationRouter from './routes/ConversationRoutes.js';
import endUserRouter from './routes/EndUserRoutes.js';

const app = express();

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }));  
app.use(passport.initialize());
app.use(passport.session());
app.use(json());

// Using the routers
app.use(userRouter);
app.use(chatbotRouter);
app.use(conversationRouter);
app.use(endUserRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
