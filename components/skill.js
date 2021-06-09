export default function Skill({ item }) {
    console.log(item);
    return (
        <div>
            <h2>{item.title}</h2>
            <strong>{item.experience}</strong>
        </div>
    )
}