import { IResponse } from '../interfaces/response.interface';
import HeadSEO from '../components/HeadSEO';

export async function getServerSideProps() {
  const res = await fetch(`${process.env.API_BASEURL}`);
  const data: IResponse = await res.json();
  return { props: { data } };
}

export default function Home({ data }: { data: IResponse }) {
  return (
    <div>
      <HeadSEO />
      <main className=" h-lvh flex flex-col items-center justify-center">
        <h1 className="text-center text-8xl font-extrabold mb-8">
          Welcome to Next.js
          <br />
          MongoDB Tailwind Biolerplate
        </h1>

        {data ? (
          <h2 className="bg-green-800 px-2 rounded-full animate-pulse">
            <span> MongoDB is connected</span>
          </h2>
        ) : (
          <h2 className=" bg-red-800 px-2 rounded-full ">MongoDB is not connected</h2>
        )}
      </main>
    </div>
  );
}
