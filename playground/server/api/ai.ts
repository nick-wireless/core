export default eventHandler(async (event) => {
  return await event.context.cloudflare.env.AI.run('@cf/meta/llama-2-7b-chat-int8', {
    prompt: 'Who is the author of Nuxt.js?'
  })
})
