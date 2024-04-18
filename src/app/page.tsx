import Image from "next/image";
import { db } from "~/server/db";

const mockURLS = [
  {
    url: "https://utfs.io/f/2c8d04ea-f56f-42b5-92e8-cb62e50498af-vg6l2x.png"
  },
  {
    url: "https://utfs.io/f/5dff2a76-9d83-4eaf-9edf-80fb62ca3410-25s38k.png"
  }
]

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts)
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockURLS,...mockURLS,...mockURLS].map((url,index) => {
            return (
              <div key={url.url + index} className="w-48">
                {/* <Image width={142} height={142} alt="none" src={url.url} /> */}
                <img src={url.url} />
            </div>
            )
          })
        }
      </div>
    </main>
  );
}
