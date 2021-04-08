import fetch from 'isomorphic-unfetch';

export default async function handler(req, res) {
  const { id } = req.query;
  var sendReq = await fetch('https://discord.com/api/v8/users/' + id, {
    method: 'GET',
    headers: {
      Authorization: `Bot ODI5MDY4OTA5MTA5MTgyNTQ1.YGywlw.hbNFUuG-YDYqmpoo7rVE5M6UWMo`,
    },
  });
  var json = await sendReq.json();
  await res.send(json);
}
