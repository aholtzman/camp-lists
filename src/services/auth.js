export const isBrowser = () => typeof window !== "undefined"

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("happycamper")
    ? JSON.parse(window.localStorage.getItem("happycamper"))
    : {}

const setUser = user =>
  window.localStorage.setItem("happycamper", JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (username === `holtzman` && password === `garland1974`) {
    return setUser({
      username: `camper`
    })
  }

  return false
}

export const isLoggedIn = () => {
  const user = getUser()

  return !!user.username
}

export const logout = callback => {
  setUser({})
  window.location.reload()
}
