function ContestList() {
    const [contests, setContests] = useState([]);
  
    useEffect(() => {
      // Inside the useEffect, fetch data from the API
      fetch("https://kontests.net/api/v1/all")
        .then((response) => response.json())
        .then((data) => {
          // Update the state with the fetched data
          setContests(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, []); // The empty dependency array ensures this effect runs once on component mount
  
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
          <tbody>
            {contests.map((contest, index) => (
              <tr key={index}>
                <td>{contest.name}</td>
                <td>{contest.site}</td>
                <td>{new Date(contest.start_time).toUTCString()}</td>
                <td>{new Date(contest.end_time).toUTCString()}</td>
                <td>{contest.status}</td>
                <td>
                  <a href={contest.url} target="_blank" rel="noopener noreferrer">
                    Contest Link
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default ContestList;
  