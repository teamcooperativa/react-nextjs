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

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September','October','November','December']

class Lessons extends React.Component {
  render() {
    return lessons.map((lesson) =>
      <tbody>
        <tr key="{lesson.id}">
          <td>{lesson.title}</td>
          <td>{months[new Date(lesson.date).getMonth()]} {new Date(lesson.date).getDate()}, {new Date(lesson.date).getFullYear()}</td>
          <td>{lesson.status || 'Draft'}</td>
          <td></td>
        </tr>
      </tbody>
    );
  }
}

class Table extends React.Component {

  renderLessons() {
    return <Lessons />;
  }

  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <h3>All</h3>
            <tr>
              <th>Lesson Title</th>
              <th>Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          {this.renderLessons()}
        </table>
      </div>
    );
  }
}

export default Table;