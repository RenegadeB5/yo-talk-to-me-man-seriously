collector.on('collect', (reaction, collector) => {
        if(reaction.emoji.name === "🔗") {
            let dm = reaction.users.map(r => r.id);
            let dmsend = dm[dm.length-1];
            let party = reaction.users.map(r => r.lastMessageID);
            let partysend = party[party.length-1];
            console.log(reaction.message.channel.fetchMessage(partysend))
            reaction.message.channel.fetchMessage(partysend)
               .then(fetchedMessage => client.users.get(dmsend).send(((fetchedMessage.embeds).map(r => r.url))[0]))
        }  
    })
    
    
client.on('messageReactionAdd', (reaction, user) => {
    const filter = (reaction, user) => reaction.emoji.name === "🔗";
    let collector = reaction.message.createReactionCollector(filter, { time: 7200000 });
    let collectlink = collector.on('collect', (reaction, collector) => {
        let dm = reaction.users.map(r => r.id);
        let dmsend = dm[dm.length-1];
        let party = reaction.users.map(r => r.lastMessageID);
        let partysend = party[party.length-1];
        client.users.get(dmsend).send(((reaction.message.embeds).map(r => r.url))[0])
        console.log(((reaction.message.embeds).map(r => r.url))[0]);
        });
    console.log('-------------------------');
    console.log(collectlink);   
});    
    
reaction.message.channel.fetchMessage(partysend)
               .then(fetchedMessage => client.users.get(dmsend).send(((fetchedMessage.embeds).map(r => r.url))[0]))
