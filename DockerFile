from node : 23
Workdir /app
Copy . .
Run npm install
Expose 3000
Cmd ["npm","start"]