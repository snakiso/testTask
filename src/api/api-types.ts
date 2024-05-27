export type KidTechType = KidTechTypeChild[];
export type KidTechTypeChild = {
	name: string;
	id: string;
	image: string;
	bgColor: string;
	tags: string[];
}

export type TransformedKidTechType = KidTechTypeChild[][];