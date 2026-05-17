import './MeetingsList.css';

export default function MeetingsList({meetings, onDelete}) {
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Usuń</th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td><button className="button button-outline button-red"
                            onClick={()=>{onDelete(meeting)}}>Usuń</button></td>
                </tr>)
            }
            </tbody>
        </table>
    );
}
