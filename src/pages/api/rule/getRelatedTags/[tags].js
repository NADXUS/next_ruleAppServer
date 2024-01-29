import axios from "axios";

export default async function GetRelatedTaggs(req, res) {

    axios.get(
        `${"https://api.r34.app/booru/rule34.paheal.net/tags?baseEndpoint=rule34.paheal.net"}&tag=${req.query.tags}&order=count&limit=15`
    ).then((response) => {
        return res.status(200).json(response.data.data);

    }).catch((error) => {
        return res.status(200).json({ null: true });

    });

}