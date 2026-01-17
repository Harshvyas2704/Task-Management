# API LIST

## AUTH API

POST /api/auth/register
POST /api/auth/login

## PROJECT API

GET /api/projects
POST /api/projects
GET /api/projects/:id
PUT /api/projects/:id
DELETE /api/projects/:id

## TASK API

GET /api/tasks?project=:projectId
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

## MANAGER (ROLE):

POST Create/edit/delete Projects
POST Assign tasks to Developers
POST Add/remove project members

## DEVELOPER (ROLE):

POST Create/edit own tasks
GET View project tasks
PATCH Update own task status

## VIEWER

GET Read-only access to projects/tasks
