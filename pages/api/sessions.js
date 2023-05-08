import { withIronSession } from 'next-iron-session'

async function handler(req, res) {
  // your session-related logic here
  const session = req.session
  let usersOnline = session.get('usersOnline')

  // Initialize usersOnline to 0 if it doesn't exist yet
  if (typeof usersOnline === 'undefined') {
    usersOnline = 0
    session.set('usersOnline', usersOnline)
    await session.save()
  }

  // Increment usersOnline when a user accesses the page
  usersOnline++
  session.set('usersOnline', usersOnline)
  await session.save()

  // If the value of usersOnline is greater than 1, display an error message
  if (usersOnline > 1) {
    return res.status(403).json({ error: 'The page is currently in use and cannot be accessed.' })
  }

  // Decrement usersOnline when the user leaves the page
  usersOnline--
  session.set('usersOnline', usersOnline)
  await session.save()

  return res.status(200).json({ message: 'Welcome to the page.' })
}

export default withIronSession(handler, {
  password: process.env.SESSION_SECRET,
  cookieName: 'myapp-session',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production' ? true : false,
  },
})
