import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";


export function FetchDataJson(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;

    const getData = () => {
      fetch(url, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            response.json().then(function (myJson) {
              setData(myJson);
            });
          } else {
            console.log(response.status);
            const errorMsg = `${response.status} : ${response.statusText}`;
            return <div className="error">{errorMsg}</div>;
          }
        })
        .catch(function (error) {
          console.log(error);
          return <Navigate to="/error/" />;
        });
    };
    getData();
  }, [url]);

  return { data };
}