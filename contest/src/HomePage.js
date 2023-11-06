function HomePage() {
    return (
      <div>
        <h1>Contests</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Site</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
              <th>Contest Link</th>
            </tr>
          </thead>
          <tbody id="contests-list"></tbody>
        </table>
      </div>
    );
  }
 export default HomePage;  