import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { useEffect, useState } from 'react'
import NotFound from './NotFound';

export default function Article() {
    const { id } = useParams();
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch(`${import.meta.env.BASE_URL}articles/${id}.md`)
            .then(async (res) => {
                const text = await res.text();
                if (!res.ok || text.startsWith("<!DOCTYPE")) {
                    throw new Error("ERROR");
                }
                if (!res.ok) throw new Error("ERROR");
                return text
            })
            .then(setContent)
                .catch(() => setContent("ERROR"));
    }, [id])


    return (
        <div>
            {content === "ERROR" ? (
                <div><NotFound /></div>
            ) : 
            (
                <div className='prose prose-invert max-w-none'>
                <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            )}
        </div>
    )
}