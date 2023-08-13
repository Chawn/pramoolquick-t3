# Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.


Tutorial: https://www.youtube.com/watch?v=YkOSUVzOAA4&ab_channel=Theo-t3%E2%80%A4gg
Doc: https://create.t3.gg/en/installation

# Installation
`npx create-t3-app@latest`
- name: 'my-t3-app'
- select `Typscript`
- select all except `NextAuth`
- Y, Y, Y

cd my-t3-app
code . 
```
git remote add origin git@github.com:Chawn/my-t3-app.git      
git branch -M main
git push -u origin main
```

## Next steps:
  cd my-t3-app
  npm run dev
  
# vercel
- create project
- deploy error

# planetscale
https://planetscale.com/
- create database
- click connect
- choose prisma
- copy connection string to .env
  
# prisma
setup prisma DB at `./prisma/schema.prisma` (from old mongodb schema)
open prisma studio
`npx prisma studio`
open `http://localhost:5555`
`npx prisma db push`

# clerk 
- goto: clerk.com
- create app
- ทำตาม Doc:  https://clerk.com/docs/nextjs/get-started-with-nextjs
  - Set Environment Keys (in .env and Vercel)
  - Create middleware.ts in src/
  - 