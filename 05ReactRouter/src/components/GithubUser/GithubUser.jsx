import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function GithubUser() {
  // const paramsData = useParams()
  const [data, setData] = useState();
  useEffect(() => {
    fetch("https://api.github.com/user/hiteshchoudhary")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  // console.log(data.username);
  return <div>GithubUser</div>;
}

export default GithubUser;
