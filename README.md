# Instructions

1. Run `npm run dev`
2. Go to `localhost:3000`
3. Look in network tab and you should see that the image request is redirected with `Status: 308`
4. Look in terminal and you should see that the middleware is passed the sanitzed URL instead of raw one
