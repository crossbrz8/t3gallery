import Link from "next/link";

const mockURLS = [
  {
    url: "https://utfs.io/f/2c8d04ea-f56f-42b5-92e8-cb62e50498af-vg6l2x.png"
  },
  {
    url: "https://utfs.io/f/5dff2a76-9d83-4eaf-9edf-80fb62ca3410-25s38k.png"
  }
]

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockURLS,...mockURLS,...mockURLS].map((url) => {
            return (
              <div key={url.url} className="w-48">
                <img src={url.url} />
            </div>
            )
          })
        }
      </div>
    </main>
  );
}
