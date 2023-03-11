document.addEventListener('DOMContentLoaded', () => {
  const webhookInput = document.getElementById('webhook-input');
  const webhookAvatar = document.getElementById('webhook-avatar');
  const webhookName = document.getElementById('webhook-name');
  const webhookInfoContainer = document.getElementById('webhook-info-container');
  const webhookserver = document.getElementById('webhook-server');
  webhookInput.addEventListener('input', () => {
    const webhookUrl = webhookInput.value;
    if (webhookUrl.length < 1 && !webhookUrl.includes("." && webhookUrl.includes("discord"))) return;
    fetch(webhookUrl)
      .then(response => response.json() )
      
      .then(data => {
        console.log(data)
        const name = data.name;
        const server = data.guild_id;
        if (data.avatar != null) { // check if the webhook as a icon
        webhookAvatar.src = `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}`
        } else {
             console.log("No Icon found Using Default")
             webhookAvatar.src = "https://theme.zdassets.com/theme_assets/678183/84b82d07b293907113d9d4dafd29bfa170bbf9b6.ico";
        }
        webhookName.innerText = "Name: "+ name;
        webhookserver.innerText = "Server: "+server;
      })
      .catch(error => {
        console.error(error);
      });
  });
});
const webhookInput = document.getElementById('webhook-input');
const Send = document.getElementById('sumbit');
const Text = document.getElementById('webhook-text');
const Del = document.getElementById('remove');
Send.addEventListener("click", () => {
  web = webhookInput.value
  fetch(web + '?wait=true', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      content: document.getElementById('SendMessage').value ,
      embeds: null,
      attachments: []
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Sent message:', data);
                   if (data.toString().includes("rate limted")) {
        console.log("User is rate limted")
       }

    })
    .catch(error => {
      console.error('Error sending message:', error);
             if (error.toString().includes("rate limted")) {
        console.log("User is rate limted")
       }
    });
});

Del.addEventListener("click", () => {
  fetch(web, {method: "DELETE",})
})