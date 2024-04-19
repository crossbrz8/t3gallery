import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic"
 
async function Images()
{
  const images = await getMyImages()
  return (
    <div className="flex flex-wrap gap-4 justify-center">
        {
          [...images,...images,...images,...images].map((image) => {
            return (
              <div key={image.id} className="w-48 h-48 flex flex-col">
                {/* <Image width={142} height={142} alt="none" src={url.url} /> */}
                <Link href={`/img/${image.id}`}>
                  <Image src={image.url} style={{objectFit:"contain"}} alt={image.name} width={192} height={192}/>
                </Link>
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
