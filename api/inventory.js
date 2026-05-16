export default async function handler(req, res) {
  const squareToken = process.env.SQUARE_ACCESS_TOKEN;
  if (!squareToken) return res.status(500).json({ error: 'Missing Square token' });

  const { itemId } = req.query;
  if (!itemId) return res.status(400).json({ error: 'Missing itemId' });

  try {
    const response = await fetch(`https://connect.squareup.com/v2/inventory/${itemId}`, {
      headers: {
        'Authorization': `Bearer ${squareToken}`,
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    res.status(200).json({ count: data.inventory_count?.count || 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
