export default function Education({ item }) {
    console.log(item);
    return (
        <div>
            <h2>{item.title}</h2>
            <strong>{item.level}</strong>
            <strong>{item.location}</strong>
        </div>
    )
}