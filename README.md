# wander-4-earth

## Instructions to run locally
- install docker desktop
- To install dependencies: `npm install`
- To start database: `docker-compose up --detach`
- Create Prisma Models: `npx prisma migrate --preview-feature` + `npx prisma generate` + `npx prisma studio`
- To start backend (from `/sus-service`): `npm run dev`
- To start frontend (from `/sustain`): `python manage.py runserver`. You may need to install dependencies before this (`pip install django`, `pip install requests`)

- To stop database: `docker-compose stop`
