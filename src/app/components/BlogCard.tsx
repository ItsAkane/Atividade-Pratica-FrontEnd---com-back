import Image, { StaticImageData } from "next/image"

type BlogCardProps = {
    imageSrc: StaticImageData
    imageAlt: string
}

export function BlogCard({ imageSrc, imageAlt }: BlogCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border my-4">
            <Image src={imageSrc} alt={imageAlt} className="w-full h-auto" placeholder="blur" />
            <div className="p-4">
                <h3 className="font-bold text-sm mb-2">Magna Tempus consequat</h3>
                <p className="text-gray-500 text-sm mb-4">Posted 45 minutes ago</p>
                <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                    cupiditate, totam distinctio, ea rerum quas inventore tempore voluptatibus quia corporis ipsum fugit sequi
                    maiores suscipit? Dolorem temporibus eum dolorum! Velit?</p>

                <div className="text-white text-sm font-bold mt-6 grid lg:grid-cols-2 gap-3">
                    <a href="">
                        <div><button className="w-full  bg-red-600 text-sm font-bold py-2 rounded">Continue Reading</button></div>
                    </a>
                    <a href="">
                        <div><button className="w-full bg-gray-800 text-sm font-bold py-2 rounded">33 Comments</button></div>
                    </a>
                </div>
            </div>
        </div>
    )
}