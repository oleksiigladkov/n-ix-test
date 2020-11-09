function route(handlers, pathname, postParams) {
  postParams = postParams || {}
  try {
    if ('function' === typeof handlers[pathname]) {
      return handlers[pathname](postParams)
    } else {
      return handlers[pathname] ? handlers[pathname] : ''
    }
  }
  catch(err) {
    return '404 Not found'
  }
}

exports.route = route