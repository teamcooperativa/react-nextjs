import { lessons } from '../public/lessons.json'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function Lessons() {
  return (
    <tbody>
      {lessons.map((lesson) =>
        <tr key={lesson.id}>
          <td key={lesson.title}>{lesson.title}</td>
          <td key={lesson.date}>{months[new Date(lesson.date).getMonth()]} {new Date(lesson.date).getDate()}, {new Date(lesson.date).getFullYear()}</td>
          <td key={lesson.status}>{lesson.status || 'Draft'}</td>
          <td key={lesson.status}></td>
        </tr>
      )}
    </tbody>
  );
}

function Table() {
  return (
    <div className="container">
      <table>
        <thead>
          <tr><th id="all">All</th></tr>
          <tr>
            <th>Lesson Title</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <Lessons />
      </table>
    </div>
  );
}

export default Table;