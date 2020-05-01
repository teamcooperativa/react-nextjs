var lessons = [
  {
    id: 1,
    title: "lesson 1",
    date: "2020-04-21T15:52:14.565Z",
    status: ""
  },
  {
    id: 2,
    title: "lesson 2",
    date: "2020-04-22T15:52:14.565Z",
    status: ""
  },
  {
    id: 3,
    title: "lesson 3",
    date: "2020-04-23T15:52:14.565Z",
    status: ""
  }
]

class Lessons extends React.Component {
  render() {
    return lessons.map((lesson) =>
      <tr>
        <td className="item">{lesson.title}</td>
        <td className="item">{new Date(lesson.date).toDateString()}</td>
        <td className="item">{lesson.status}</td>
      </tr>
    );
  }
}

class Table extends React.Component {

  renderLessons() {
    return <Lessons/ >;
  }

  render() {
    return (
      <div>
        <colgroup span="4" className="columns"></colgroup>
        <table>
          <tr>
            <th className="title">Lesson Title</th>
            <th className="title">Date</th>
            <th className="title">Status</th>
            <th className="title">Actions</th>
          </tr>
          {this.renderLessons()}          
        </table>
      </div>
    );
  }
}

export default Table;