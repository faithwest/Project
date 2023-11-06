function ContestList() {
    const [contests, setContests] = useState([]);
  
    useEffect(() => {
      fetch("https://kontests.net/api/v1/all")
        .then((response) => response.json())
        .then((data) => {
          setContests(data);
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }, []); 
  
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
  