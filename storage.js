async function links(userid) {
      const response = await linkdb_channel.fetchMessages()
      const linksend = response.map(r => r.content)
      var linkcount = 0
      linksend.forEach(function (message) {
          if (((message.split(" "))[0]) === userid) {
              linkcount += 1
              }
          });
      return linkcount
  }
