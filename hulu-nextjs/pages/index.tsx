import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Movies from "../components/Movies";
import Nav from "../components/Nav";
export interface HomeProps {}
const Home: NextPage = () => {
  const [value, setValue] = useState("batman");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [data, setData] = useState(null);

  const handleChangeSearch = (e: any) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?api_key=${process.env.REACT_APP_API_KEY}${value}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          setData(data.Search || data);
          setError({ show: false, msg: "" });
        } else {
          setError({ show: true, msg: "data.Error" });
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [value]);
  return (
    <div>
      <Head>
        <title>Movie Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <input
        type="text"
        placeholder="Enter your movie name"
        className="mt-5 ml-20 p-2 rounded w-100 form-control"
        value={value}
        onChange={handleChangeSearch}
      />
      {error.show && <div className="error">{error.msg}</div>}
      <Movies isLoading={loading} movies={data} />
    </div>
  );
};

export default Home;
export const getStaticProps: GetStaticProps<HomeProps> = async (
  context: GetStaticPropsContext
) => {
  return {
    props: {},
    revalidate: 60,
  };
};