export default function Client({ item }) {
    console.log(item);
    return (
        <div>
            <h2>{item.title}</h2>
        </div>
    )
}