import axios from "axios";

export default function getGalery(req, res) {
    if (req.method === 'GET') {
        if (req.query.tags == "+") {
            axios
                .get(
                    `${"https://api.r34.app/booru/rule34.paheal.net/posts?baseEndpoint=rule34.paheal.net"}&limit=44&pageID=${parseInt(
                        req.query.page
                    )}`
                )
                .then((response) => {
                    res.status(200).json(response.data.data);
                })
                .catch((error) => {
                    console.log(error.message);
                    res.status(200).json({ null: true });
                });
        } else {
            axios
                .get(
                    `${"https://api.r34.app/booru/rule34.paheal.net/posts?baseEndpoint=rule34.paheal.net"}&limit=44&pageID=${parseInt(
                        req.query.page
                    )}&tags=${req.query.tags.replaceAll("+", "%7C")}&httpScheme=http`
                )
                .then((response) => {
                    res.status(200).json(response.data.data);
                })
                .catch((error) => {
                    console.log(error.message);
                    res.status(200).json({ null: true });
                });
        }
    }
}