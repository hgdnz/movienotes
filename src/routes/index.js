const { Router } = require('express')

const usersRouter = require('./users.routes')
const notesRouter = require('./notes.routes')
const tagsRouter = require('./tags.routes')

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/movieNotes', notesRouter)
routes.use('/movieTags', tagsRouter)

// routes.use('/notes', notesRouter)
// routes.use('/tags', tagsRouter)

module.exports = routes
