const component = {
  method: 'GET',
  handler: async function (req, reply) {
    return reply.redirectTo('waibuDemo:/mpa/component/bootstrap/bootstrap-icons/accordion')
  }
}

export default component
