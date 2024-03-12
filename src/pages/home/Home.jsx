/* eslint-disable react/prop-types */
import Feed from "../../components/feed/Feed";
import Siderbar from "../../components/sidebar/Siderbar";
import "./Home.css";
import { useState } from "react";

function Home({ sidebar }) {
  // for displaying diff categories
  const [category, setCategory] = useState(0);

  return (
    <>
      <Siderbar
        sidebar={sidebar}
        category={category}
        setCategory={setCategory}
      />
      <div className={`container ${sidebar ? "" : "large-container"}`}>
        <Feed category={category} />
      </div>
    </>
  );
}

export default Home;
