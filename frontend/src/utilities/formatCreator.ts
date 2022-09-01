import { CreatorName } from "./types"
import formatName from "./formatName"

// returns comma separated list of creator names. tries to format names so they are <fist> <last>.
// if there are more creators than `limit`, the list of creators is truncated and et al., is suffixed.
export function formatCreators(creators: CreatorName[], limit: number = 3): string {
    if (creators.length > limit) {
        return creators.slice(0, limit).map(value => formatName(value.name)).join(", ").concat(" et al.,")
    }

    return creators.map(value => formatName(value?.name)).join(", ")
}

export default formatCreators;
