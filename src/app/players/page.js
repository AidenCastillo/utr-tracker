import AddPlayer from "./addPlayer";
import PocketBase from "pocketbase";
import * as utr from "utrjs";

export const dynamic = "autho",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion= "auto"

async function getWatchlist() {
  const db = new PocketBase("http://127.0.0.1:8090");
  const data = await db.collection("watchlist").getList();
  // const res = await fetch("http://127.0.0.1:8090/api/collections/watchlist/records?page=1&perPage=30", { cache: "no-store" });
  // const data = await res.json();
  // console.log(data)
  return data.items;
}


export default async function playersPage() {
  const watchlist = await getWatchlist();
  return (
    <div>
      <h1>Players</h1>
      <div>
        {watchlist.map((player) => {
          return <Player key={player.id} name={player.name} />;
        })
        }
      </div>
      <AddPlayer/>
    </div>
  );
}

async function Player({ name }) {
  const searchdata = await utr.searchPlayer(name);
  const player = await utr.getPlayer(searchdata.hits[0].source.id);
  const singlesUTR = player.singlesUtr;
  

  return (
    <div>
      <h1>{name}</h1>
      <p>Singles:{singlesUTR}</p>

    </div>
  );
}
