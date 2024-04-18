import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic"

async function Images()
{
  const posts = await db.query.images.findMany({
    orderBy : (model,{desc}) => desc(model.id)
  })
  return (
    <div className="flex flex-wrap gap-4">
        {
          [...posts,...posts,...posts,...posts].map((image) => {
            return (
              <div key={image.id} className="w-48 flex flex-col">
                {/* <Image width={142} height={142} alt="none" src={url.url} /> */}
                <img src={image.url} />
                <div>{image.name}</div>
            </div>
            )
          })
        }
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="">
        <SignedOut>
          <div className="w-full h-full text-2xl text-center">please sign in to see the images</div>
        </SignedOut>
        <SignedIn>
          <Images />
        </SignedIn>
    </main>
  );
}
