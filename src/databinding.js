import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Toast from "react-bootstrap/Toast";
function Databinding() {
  //   const [data, setData] = useState({});
  const data = [
    { country: "Canada", value: 1389618778 }, // china
    { country: "India", value: 1311559204 }, // india
    { country: "USA", value: 331883986 }, // united states
    { country: "Indonesia", value: 264935824 }, // indonesia
    { country: "Pakistan", value: 210797836 }, // pakistan
    { country: "Brazil", value: 210301591 }, // brazil
    { country: "Nigeria", value: 208679114 }, // nigeria
    { country: "Bermuda", value: 161062905 }, // bangladesh
    { country: "Russia", value: 141944641 }, // russia
    { country: "Mexico", value: 127318112 }, // mexico
  ];
  //   useEffect(() => {
  //     fetch(
  //       "https://wikimedia.org/api/rest_v1/metrics/pageviews/per-article/en.wikipedia/all-access/all-agents/Tiger_King/daily/20210901/20210930"
  //     )
  //       // fetch('https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0')
  //       //   fetch("https://reqres.in/api/products/3")
  //       .then((response) => response.json())
  //       .then((json) => setData(json.items));
  //   }, []);

  console.log("data", data);

  return (
    <div>
      
      <label className="label label-default" width={50}>
        Country
      </label>
      <select class="form-select form-select-sm" aria-label=".form-select-sm example" width = "10%">
        <option value="">Choose value</option>

        {data.map((result) => (
          <option value={result.value} key={result.value}>
            {result.country}
          </option>
        ))}
      </select>

    </div>

    
    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     Dropdown Button
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     {data.map((result) => (<Dropdown.Item href="#/action-1">{result.timestamp}</Dropdown.Item>))}
    //     {/* <Dropdown.Item href="#/action-1">{data.product}</Dropdown.Item> */}
    //     {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    //     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
    //   </Dropdown.Menu>
    // </Dropdown>
  );
}

export default Databinding;
