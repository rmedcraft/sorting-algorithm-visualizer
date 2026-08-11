This is a template for web projects using
- Typescript (~6.0.2)
- React (^19.2.6)
- React Router (^7.17.0, Declarative Mode)
- TailwindCSS (^4.3.0)
- Vite (^8.0.12)
- ShadCn (^4.11.0)

This was initially set up on WSL Ubuntu 24.04.3 and has been tested on
- WSL Ubuntu 24.04.3
- WSL Ubuntu 24.04.4
- Windows 10
- Windows 11

# Setup

### Using the Github CLI

```bash
gh repo create <my-repo> --private --template https://github.com/rmedcraft/web-template
```

### Using the Github Website

https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

1. On GitHub, navigate to https://github.com/rmedcraft/web-template
2. Above the file list, click Use this template.
3. Select Create a new repository

Then follow the instructions for making the repo like you usually would

### After cloning the new repo
Run: 
```bash
cd <my-repo>
npm install
npm run dev
```
then start coding

# Updating Shadcn Theme

1. Create a new theme at https://ui.shadcn.com/themes
2. Click "Get Code" at the bottom left
3. Select "Existing Project" and copy the command for the full preset
4. Run the command in your project directory
