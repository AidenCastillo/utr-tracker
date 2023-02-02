"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import PocketBase from "pocketbase";

export default function AddPlayer() {
  const [name, setName] = useState("");



  const create = async () => {
		console.log(name);
    const pb = new PocketBase("http://127.0.0.1:8090");
    
    await pb.collection("watchlist").create({ name: name });

		setName("");

  };

  return (
    <form onSubmit={create}>
      <h3>Add Player to watchlist</h3>
      <input
        type="text"
        placeholder="Player Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">
			Add
			</button>
    </form>
  );
}
