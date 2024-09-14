const component = {
  method: 'GET',
  handler: async function (req, reply) {
    await reply.redirectTo('waibuDemo:/mpa/component/bootstrap/phosphor/accordion')
  }
}

export default component
