export default function Job({ item }) {
    console.log(item);
    return (
        <div>
            <h2>{item.title}</h2>
            <strong>{item.type}</strong>
            <strong>{item.location}</strong>
        </div>
    )
}