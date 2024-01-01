import axios from "axios";

export default function GetRelatedTaggs(req, res) {
    if (req.method === 'GET') {
        axios.get(
            `${"https://api.r34.app/booru/rule34.paheal.net/tags?baseEndpoint=rule34.paheal.net"}&tag=${req.query.tags}&order=count&limit=15`
        ).then((response) => {
            res.status(200).json(response.data.data);
        }).catch((error) => {
            res.status(200).json({ null: true });
        });
    }
}