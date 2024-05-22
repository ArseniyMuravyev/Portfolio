import { gridItems } from "@/data";
import { FC } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

export const Grid: FC = () => {
	return (
		<section id="about">
			<BentoGrid>
				{gridItems.map(
					({
						id,
						title,
						description,
						className,
						img,
						imgClassName,
						titleClassName,
						spareImg,
					}) => (
						<BentoGridItem
							id={id}
							key={id}
							title={title}
							description={description}
							className={className}
							img={img}
							imgClassName={imgClassName}
							titleClassName={titleClassName}
							spareImg={spareImg}
						/>
					)
				)}
			</BentoGrid>
		</section>
	);
};
