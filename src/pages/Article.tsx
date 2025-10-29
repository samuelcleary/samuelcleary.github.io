import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'

export default function Article() {
    const { id } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`/articles/${id}.md`)
            .then((res) => {
                if (!res.ok) throw new Error("no file");
                return res.text();
            })
            .then(setContent)
            .catch(() => setContent("article no found"));
    }, [id])


    return (
        <div>
            <ReactMarkdown>{content}</ReactMarkdown>
        </div>
    )
}