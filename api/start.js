export default function handler(req, res) {
  const { placeId, gameInstanceId } = req.query;

  if (!placeId || !gameInstanceId) {
    return res.status(400).send("Missing placeId or gameInstanceId");
  }

  const robloxLink = `roblox://placeID=${placeId}&gameInstanceId=${gameInstanceId}`;
  res.writeHead(302, { Location: robloxLink });
  res.end();
}