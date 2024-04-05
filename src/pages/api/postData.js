import clientPromise from "../../utils/mongodb";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("test");

    const { url } = req.body;
    const document = await db.collection("URL-Dataset").findOne({ url });

    if (document) {
      res.status(200).json({ label: document.label });
    } else {
      console.log("None found");
      res.status(404).json({ message: "URL not found", label: "Unknown" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}
