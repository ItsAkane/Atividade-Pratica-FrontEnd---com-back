import Image, { StaticImageData } from "next/image"

type PortifolioCardProps = {
    imageSrc: StaticImageData
    imageAlt: string
}


export function PortifolioBanner({ imageSrc, imageAlt }: PortifolioCardProps) {
    return (
        <div className="bg-white rounded shadow-md overflow-hidden border my-4">
            <Image src={imageSrc} alt={imageAlt} className="w-full h-auto" />
            <div className="p-4">
                <h3 className="font-bold text-sm mb-2">Ipsum feugiat et dolor</h3>
                <p className="text-gray-500 text-sm mb-4">Lorem ipsum dolor sit amet sit veroeros sed amet blandit consequat
                    veroeros lorem blandit adipiscing et feugiat phaslleus tempus dolore ipsum lorem dolore.</p>
                <a href="">
                    <button className="w-full bg-gray-800 text-white text-sm font-bold py-2 rounded">Find out more</button>
                </a>
            </div>
        </div>
    )
}