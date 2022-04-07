const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

  const Discord = require('discord.js');
  const client = new Discord.Client();
  
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });
  
  client.on('message', msg => {
    if (msg.content === '!bilge') {
      msg.reply("Bre ayran budalası!"+'<br/>'+"İyice saldın bizi de"+'<br/>'+"Lütfedip de gelirsen"+'<br/>'+"Gelirsen işte o zaman"+'<br/>'+"En nihayetinde her şey olacağına varacak");
    }
  });
  
  client.login("OTYxMzc4NDUwMDU1MjQxNzg5.Yk4HdA.81r3KIcl8f2uX9JbGnDoG8OGom0");