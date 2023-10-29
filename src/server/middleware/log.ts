export default defineEventHandler((event) => {
  console.warn(`New request: ${event.node.req.url}`)
})
