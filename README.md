# This is my simple portfolio website
This is the automated deployment of my static website, using GitHub Actions!


## Structure

```
src/            
public/          
package.json
vite.config.js
```

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   
npm run preview 
```

`dist/` is what I deploy to the EC2 instance, into Nginx, as part of my GitHub Actions workflow.
