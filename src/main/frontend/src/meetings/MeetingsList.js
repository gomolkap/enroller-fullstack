export default function MeetingsList({meetings, onDelete}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <button className={"button button-outline"}
                            onClick={()=>{onDelete(meeting)}}>Usuń</button>
                </tr>)
            }
            </tbody>
        </table>
    );
}
