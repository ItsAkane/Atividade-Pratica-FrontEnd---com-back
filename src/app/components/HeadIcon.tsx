import Image, { StaticImageData } from "next/image"

type BlogCardProps = {
    imageSrc: StaticImageData
    imageAlt: string
}

export function HeaderIcon({ imageSrc, imageAlt }: BlogCardProps) {
    return (
        <div className="text-center mx-8 mt-8 mb-4 lg:border-b-0 border-b-2 border-gray-300 pb-2">
            <div className="flex justify-center mt-4 pt-12">
                <Image src={imageSrc} alt={imageAlt} />
            </div>

            <h3 className="text-xl font-semibold pb-8">Ipsum consequata</h3>

            <h3 className="text-l text-gray-500 pb-18">
                Nisl amet dolor sit ipsum veroeros sed blandit consequat veroeros et
                magna tempus.
            </h3>
        </div>
    )
}