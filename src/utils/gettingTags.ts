import {KidTechType} from "../api/api-types.ts";

export  const gettingTags = (data: KidTechType) => {
    const tags = data.reduce((accumulator: string[], item) => {
        item.tags.forEach(tag => {
            if (!accumulator.includes(tag)) {
                accumulator.push(tag);
            }
        });
        return accumulator;
    }, []);

    return tags
}
